"use client";

import React, { useState } from 'react';
import { Sparkles, Globe, TrendingUp } from 'lucide-react';
import { STARTUPS } from '../../lib/data';

const STATUS_STYLES = {
  'Active':    { bg: '#22c55e18', border: '#22c55e40', text: '#4ade80', dot: '#22c55e' },
  'Shipped':   { bg: '#3b82f618', border: '#3b82f640', text: '#60a5fa', dot: '#3b82f6' },
  'YC Backed': { bg: '#f59e0b18', border: '#f59e0b40', text: '#fbbf24', dot: '#f59e0b' },
  'Growing':   { bg: '#f9731618', border: '#f9731640', text: '#fb923c', dot: '#f97316' },
};

/* ── Link buttons shared by both card types ── */
function CardLinks({ s }) {
  return (
    <div className="flex items-center gap-2">
      {s.link && (
        <a href={s.link} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:-translate-y-0.5"
          style={{ background: s.color, boxShadow: `0 6px 20px ${s.color}45` }}>
          <Globe size={12} /> Website
        </a>
      )}
      {s.linkedin && (
        <a href={s.linkedin} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5"
          style={{ background: 'rgba(10,102,194,0.15)', border: '1px solid rgba(10,102,194,0.35)', color: '#60a5fa' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}

/* ── Icon placeholder when no image ── */
function IconPlaceholder({ s }) {
  return (
    <div className="w-full h-full flex items-center justify-center"
      style={{ background: `radial-gradient(ellipse at 50% 50%, ${s.color}18 0%, transparent 70%)` }}>
      <span className="text-7xl opacity-20 select-none">{s.icon}</span>
    </div>
  );
}

/* ────────────────── HERO CARD ────────────────── */
function HeroCard({ s }) {
  const [hovered, setHovered] = useState(false);
  const status = STATUS_STYLES[s.status] || STATUS_STYLES['Active'];

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden border transition-all duration-700 cursor-pointer group"
      style={{
        background: 'linear-gradient(135deg, #0D1635 0%, #0a0f2a 100%)',
        borderColor: `${s.color}30`,
        boxShadow: hovered ? `0 30px 80px ${s.color}25, 0 0 0 1px ${s.color}30` : '0 10px 40px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow blob */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none transition-opacity duration-700"
        style={{ background: `radial-gradient(ellipse at 80% 20%, ${s.color}20 0%, transparent 65%)`, opacity: hovered ? 1 : 0.5 }} />

      <div className="relative z-10 flex flex-col md:flex-row min-h-[360px]">

        {/* Left: text */}
        <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between gap-6">
          <div>
            {/* Top row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              {s.icon.startsWith('/') ? (
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white p-2 shrink-0">
                  <img src={s.icon} alt={s.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <span className="text-4xl">{s.icon}</span>
              )}
              <span className="text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full border"
                style={{ color: s.color, borderColor: `${s.color}40`, background: `${s.color}12` }}>
                {s.tag}
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.text }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: status.dot }} />
                {s.status}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none mb-3">
              {s.name}
            </h3>

            {s.role && (
              <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold mb-4">
                {s.role}{s.year ? ` · ${s.year}` : ''}
              </p>
            )}

            <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md">
              {s.desc}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 flex-wrap">
            <CardLinks s={s} />
            <span className="inline-flex items-center gap-1.5 text-[11px] text-white/25 font-bold uppercase tracking-widest ml-1">
              <TrendingUp size={12} style={{ color: s.color }} /> Featured Venture
            </span>
          </div>
        </div>

        {/* Right: image panel */}
        <div className="relative md:w-[40%] min-h-[220px] md:min-h-full overflow-hidden">
          {s.img ? (
            <img src={s.img} alt={s.name}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
          ) : (
            <IconPlaceholder s={s} />
          )}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, #0D1635 0%, transparent 35%, transparent 65%, #0D1635 100%)' }} />
        </div>

      </div>
    </div>
  );
}

/* ────────────────── STANDARD CARD ────────────────── */
function StandardCard({ s }) {
  const [hovered, setHovered] = useState(false);
  const status = STATUS_STYLES[s.status] || STATUS_STYLES['Active'];
  const isEmpty = !s.desc && !s.role;

  return (
    <div
      className="relative rounded-[1.75rem] overflow-hidden border transition-all duration-500 cursor-pointer group flex flex-col"
      style={{
        background: '#0D1635',
        borderColor: hovered ? `${s.color}40` : 'rgba(255,255,255,0.06)',
        boxShadow: hovered ? `0 20px 60px ${s.color}20, 0 0 0 1px ${s.color}30` : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        minHeight: isEmpty ? '220px' : '380px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${s.color}80, transparent)`, opacity: hovered ? 1 : 0 }} />

      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{ background: `radial-gradient(circle at 80% 0%, ${s.color}15 0%, transparent 70%)` }} />

      {isEmpty ? (
        /* ── Coming-soon / empty state ── */
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl overflow-hidden"
            style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
            {s.icon.startsWith('/') ? (
              <img src={s.icon} alt={s.name} className="w-full h-full object-contain p-2" />
            ) : (
              s.icon
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: `${s.color}cc` }}>{s.tag}</span>
            <h3 className="text-xl font-black text-white tracking-tighter">{s.name}</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.text }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: status.dot }} />
            {s.status}
          </span>
        </div>
      ) : (
        <>
          {/* Content */}
          <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl overflow-hidden"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                {s.icon.startsWith('/') ? (
                  <img src={s.icon} alt={s.name} className="w-full h-full object-contain p-2" />
                ) : (
                  s.icon
                )}
              </div>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.text }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: status.dot }} />
                {s.status}
              </span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest mb-1.5 block" style={{ color: `${s.color}cc` }}>{s.tag}</span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-tight mb-1.5"
              style={{ textShadow: hovered ? `0 0 30px ${s.color}40` : 'none' }}>
              {s.name}
            </h3>
            {s.role && (
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-3">
                {s.role}{s.year ? ` · ${s.year}` : ''}
              </p>
            )}
            <p className="text-white/55 text-xs sm:text-sm leading-relaxed flex-1">{s.desc}</p>

            {/* Links */}
            <div className="mt-5 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <CardLinks s={s} />
            </div>
          </div>

          {/* Bottom image strip */}
          {s.img && (
            <div className="relative h-32 sm:h-36 w-full shrink-0 overflow-hidden">
              <div className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to bottom, #0D1635 0%, transparent 40%)' }} />
              <img src={s.img} alt={s.name}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ────────────────── SECTION ────────────────── */
export default function StartupsSection() {
  return (
    <section id="startups" className="w-full py-20 sm:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden"
      style={{ background: '#060D25' }}>

      {/* Background decorations */}
      <div className="absolute top-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(61,91,241,0.08) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-15%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 text-[10px] font-bold tracking-widest text-white/40 uppercase">
               Ventures & Builds
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black tracking-tighter text-white leading-none mb-2">
              Startups <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))' }}>
                I&apos;ve Built
              </span>
            </h2>
            <p className="text-white/35 text-sm sm:text-base max-w-md leading-relaxed">
              From EdTech to Dev tools — products built with conviction, shipped with purpose.
            </p>
          </div>
        </div>

        {/* Hero card */}
        <div className="mb-5 sm:mb-6">
          <HeroCard s={STARTUPS[0]} />
        </div>

        {/* 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {STARTUPS.slice(1).map((s) => (
            <StandardCard key={s.name} s={s} />
          ))}
        </div>

      </div>
    </section>
  );
}
