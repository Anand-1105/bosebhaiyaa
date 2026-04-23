"use client";

import React from 'react';
import { Linkedin, Youtube, Calendar } from 'lucide-react';
import { HERO, NAV, MARQUEE_ITEMS } from '../../lib/data';

export default function HeroSection({ onScheduleMeeting }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden" style={{ borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }}>

      {/* ── Background Video ── */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" src={HERO.videoSrc} />

      {/* ── Dark cinematic gradient overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* ── Subtle vignette ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)' }} />

      {/* ── Hero Content ── */}
      <main className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-20 sm:pb-24 flex flex-col items-center text-center">

        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-6 sm:mb-8 text-white text-xs sm:text-sm font-semibold" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.25) 2%,rgba(18,62,151,0.35) 49%,rgba(100,137,212,0.25) 100%)', boxShadow: '0 1px 2px rgba(0,42,254,0.12), inset 0 0 10px rgba(255,255,255,0.12)', border: '1px solid rgba(132,173,255,0.2)' }}>
          <span className="w-2 h-2 rounded-full bg-[#84ADFF] animate-pulse shrink-0" />
          {HERO.badge}
        </div>

        {/* Headline */}
        <h1 className="leading-[1.05] tracking-tight mb-4 sm:mb-6 text-white drop-shadow-2xl max-w-5xl px-2" style={{ fontSize: 'clamp(2.2rem,5.5vw,5rem)', fontWeight: 300 }}>
          {NAV.brand} <span style={{ fontWeight: 700 }}>{NAV.brandSub.replace('.', '')}</span>
          <span className="block mt-1" style={{ fontWeight: 300 }}>
            {HERO.tagline} <span className="blue-grad-text" style={{ fontWeight: 700 }}>{HERO.taglineHighlight}</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-[17px] md:text-xl text-white/70 mb-10 sm:mb-12 max-w-2xl leading-relaxed px-2">
          {HERO.subheadline}
        </p>

        {/* Student avatars + count */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex -space-x-2 sm:-space-x-3">
            {HERO.avatarImages.map((src, i) => (
              <img key={i} src={src} alt="Student" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 object-cover" />
            ))}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm text-white flex justify-center items-center text-xs font-bold">+</div>
          </div>
          <span className="text-[13px] sm:text-[15px] font-bold tracking-tight text-white/90">{HERO.studentCount}</span>
        </div>

        {/* Floating Glass Stats Row */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3">
          {HERO.socialStats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 shadow-lg hover:bg-white/20 transition-all">
              {stat.platform === 'youtube' && (
                <div className="bg-[#FF0000] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0">
                  <Youtube size={14} className="text-white fill-current" />
                </div>
              )}
              {stat.platform === 'linkedin' && (
                <div className="bg-[#0A66C2] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0">
                  <Linkedin size={14} className="text-white fill-current" />
                </div>
              )}
              {stat.platform === 'profile' && (
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 border border-white/30">
                  <img src={stat.img || HERO.profileImg} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white leading-none">{stat.value}</span>
                <span className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Marquee strip at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-3 sm:py-4 mask-marquee overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-8 sm:gap-10 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {MARQUEE_ITEMS.map((label, i) => (
            <span key={i} className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
