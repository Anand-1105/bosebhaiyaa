"use client";

import React, { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "/img/meets/ugc-chairman-1.jpeg", label: "UGC Chairman – Mamidala Jagadesh Kumar" },
  { src: "/pdf/abc.jpg",                   label: "NEP SAARTHI Appointment Letter" },
];

export default function UgcSaarthi() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightboxIndex((i) => (i + 1) % IMAGES.length);

  return (
    <>
      {/* ─── Card ─── */}
      <section
        className="relative w-full py-8 px-4 sm:px-8 lg:px-12 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#060D25 0%,#0D1640 55%,#060D25 100%)",
          border: "1px solid rgba(83,99,177,0.25)",
        }}
      >
        {/* glow blobs */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(61,91,241,0.18),transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(132,173,255,0.14),transparent 70%)" }} />

        <div className="relative z-10 max-w-[1100px] mx-auto">

          {/* ── Badge ── */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(61,91,241,0.18)", color: "#84ADFF", border: "1px solid rgba(61,91,241,0.35)" }}
            >
              UGC Official Recognition
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              D.O. No. F. 1-30/2023 (NEP) &nbsp;·&nbsp; September 21, 2023
            </span>
          </div>

          {/* ── Title ── */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 leading-tight"
            style={{ background: "linear-gradient(90deg,#fff 35%,#84ADFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            NEP SAARTHI
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
            Student Ambassador for Academic Reforms in Transforming Higher Education in India
          </p>

          {/* ── Images ── */}
          <div className="flex flex-col sm:flex-row gap-6">

            {/* Chairman portrait */}
            <div className="w-full sm:w-56 shrink-0">
              <button
                onClick={() => setLightboxIndex(0)}
                className="group relative w-full rounded-2xl overflow-hidden block focus:outline-none"
                style={{ border: "1px solid rgba(132,173,255,0.18)" }}
                aria-label="View UGC Chairman photo"
              >
                <img
                  src={IMAGES[0].src}
                  alt={IMAGES[0].label}
                  className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: "3/4", display: "block" }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(6,13,37,0.6)" }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-white"
                    style={{ background: "rgba(61,91,241,0.8)" }}>
                    <ZoomIn size={12} /> Zoom
                  </span>
                </div>
              </button>
              <div className="mt-2.5 px-0.5">
                <p className="text-sm font-semibold text-white">Mamidala Jagadesh Kumar</p>
                <p className="text-xs mt-0.5" style={{ color: "#84ADFF" }}>Chairman, UGC</p>
              </div>
            </div>

            {/* Appointment letter image */}
            <div className="flex-1 min-w-0">
              <button
                onClick={() => setLightboxIndex(1)}
                className="group relative w-full rounded-2xl overflow-hidden block focus:outline-none"
                style={{ border: "1px solid rgba(132,173,255,0.18)" }}
                aria-label="View appointment letter"
              >
                <img
                  src={IMAGES[1].src}
                  alt={IMAGES[1].label}
                  className="w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ maxHeight: "600px", background: "#fff", display: "block" }}
                />
                <div
                  className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(to top,rgba(6,13,37,0.55),transparent 50%)" }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-white text-xs font-medium"
                    style={{ background: "rgba(61,91,241,0.8)" }}>
                    <ZoomIn size={13} /> Click to Zoom
                  </span>
                </div>
              </button>
              <div className="mt-2.5 px-0.5">
                <p className="text-sm font-semibold text-white">NEP SAARTHI Appointment Letter</p>
                <p className="text-xs mt-0.5" style={{ color: "#84ADFF" }}>Issued by University Grants Commission</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white z-20 hover:bg-white/20 transition"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            onClick={prev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white z-20 hover:bg-white/20 transition"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white z-20 hover:bg-white/20 transition"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex flex-col items-center max-w-3xl w-full">
            <img
              src={IMAGES[lightboxIndex].src}
              alt={IMAGES[lightboxIndex].label}
              className="rounded-xl shadow-2xl"
              style={{
                maxHeight: "85vh",
                maxWidth: "100%",
                objectFit: "contain",
                background: lightboxIndex === 1 ? "#fff" : "transparent",
              }}
            />
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {IMAGES[lightboxIndex].label}
            </p>
            <div className="flex gap-2 mt-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === lightboxIndex ? "#84ADFF" : "rgba(255,255,255,0.25)" }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
