"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ImageLightbox({ src, images, index = 0, alt = "", children }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(index);
  const [scale, setScale] = useState(1);
  const [drag, setDrag] = useState({ active: false, x: 0, y: 0, startX: 0, startY: 0 });
  const overlayRef = useRef(null);

  const items = Array.isArray(images) && images.length
    ? images.map(i => (typeof i === "string" ? { src: i, alt: "" } : i))
    : src
      ? [{ src, alt }]
      : [];

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setCurrent(c => Math.max(0, c - 1));
      if (e.key === "ArrowRight") setCurrent(c => Math.min(items.length - 1, c + 1));
      if (e.key === "+") setScale(s => Math.min(3, s + 0.25));
      if (e.key === "-") setScale(s => Math.max(1, s - 0.25));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  useEffect(() => {
    if (!open) {
      setScale(1);
      setDrag({ active: false, x: 0, y: 0, startX: 0, startY: 0 });
    }
  }, [open]);

  function openAt(i = 0) {
    setCurrent(i);
    setOpen(true);
  }

  // touch swipe
  const touch = useRef({ x: 0, y: 0 });
  function onTouchStart(e) {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  }
  function onTouchEnd(e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setCurrent(c => Math.min(items.length - 1, c + 1));
      else setCurrent(c => Math.max(0, c - 1));
    }
  }

  // drag for pan when zoomed
  function onPointerDown(e) {
    if (scale <= 1) return;
    e.preventDefault();
    setDrag(d => ({ ...d, active: true, startX: e.clientX - d.x, startY: e.clientY - d.y }));
  }
  function onPointerMove(e) {
    if (!drag.active) return;
    setDrag(d => ({ ...d, x: e.clientX - d.startX, y: e.clientY - d.startY }));
  }
  function onPointerUp() {
    setDrag(d => ({ ...d, active: false }));
  }

  const content = open ? createPortal(
    <div ref={overlayRef} className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85" onClick={() => setOpen(false)}>
      <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button aria-label="Close" className="absolute top-4 right-4 z-20 text-white p-2 rounded-md bg-black/40" onClick={() => setOpen(false)}>✕</button>
        {items.length > 1 && <button aria-label="Previous" className="absolute left-4 z-20 text-white p-2 rounded-md bg-black/40" onClick={() => setCurrent(c => Math.max(0, c - 1))}>‹</button>}
        {items.length > 1 && <button aria-label="Next" className="absolute right-4 z-20 text-white p-2 rounded-md bg-black/40" onClick={() => setCurrent(c => Math.min(items.length - 1, c + 1))}>›</button>}

        <div className="flex flex-col items-center gap-3">
          <div className="relative overflow-hidden touch-none" style={{ width: 'clamp(300px, 80vw, 1100px)', height: 'clamp(200px, 80vh, 800px)' }}>
            <img
              src={items[current].src}
              alt={items[current].alt || `Image ${current + 1}`}
              className="block mx-auto select-none"
              style={{ transform: `translate(${drag.x}px, ${drag.y}px) scale(${scale})`, transition: drag.active ? 'none' : 'transform 180ms ease', maxWidth: '100%', maxHeight: '100%' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onDoubleClick={() => setScale(s => s === 1 ? 2 : 1)}
              draggable={false}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-white bg-black/40 px-3 py-1 rounded" onClick={() => setScale(s => Math.max(1, s - 0.25))}>-</button>
            <span className="text-white text-sm">{Math.round(scale * 100)}%</span>
            <button className="text-white bg-black/40 px-3 py-1 rounded" onClick={() => setScale(s => Math.min(3, s + 0.25))}>+</button>
          </div>
          {items.length > 1 && <div className="flex gap-2 overflow-x-auto py-1">
            {items.map((it, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-16 h-12 overflow-hidden rounded ${i === current ? 'ring-2 ring-white' : ''}`}>
                <img src={it.src} alt={it.alt || `Thumb ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <span
        onClick={(e) => { e.stopPropagation(); openAt(index); }}
        role="button"
        tabIndex={0}
        className="inline-block cursor-zoom-in"
        onKeyDown={(e) => { e.stopPropagation(); if (e.key === 'Enter') openAt(index); }}
      >
        {children ? children : <img src={src} alt={alt} />}
      </span>
      {content}
    </>
  );
}
