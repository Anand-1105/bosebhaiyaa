"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube, Calendar, Image, Mic } from 'lucide-react';
import { HERO, NAV, MARQUEE_ITEMS } from '../../lib/data';

export default function HeroSection({ onScheduleMeeting }) {
  const [displayItems, setDisplayItems] = React.useState([...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]);

  React.useEffect(() => {
    // Create a randomized, extended set of items to prevent duplicates on screen
    // Repeat the original set 3 times to make the list long enough
    const extended = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    
    // Fisher-Yates Shuffle with a simple check for adjacent duplicates
    const shuffle = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    let result = shuffle(extended);
    
    // Simple pass to fix adjacent duplicates
    let attempts = 0;
    while (attempts < 50) {
      let hasAdjacent = false;
      for (let i = 0; i < result.length; i++) {
        const prev = i === 0 ? result[result.length - 1] : result[i - 1];
        if (result[i] === prev) {
          hasAdjacent = true;
          // Swap with a random position
          const swapIdx = Math.floor(Math.random() * result.length);
          [result[i], result[swapIdx]] = [result[swapIdx], result[i]];
        }
      }
      if (!hasAdjacent) break;
      attempts++;
    }
    
    setDisplayItems(result);
  }, []);

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

        {/* Media Navigation Dock (Inspiration Style) */}
        <div className="mt-12 sm:mt-16 animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-1 p-2 rounded-[28px] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Link 
              href="/gallery" 
              className="flex items-center gap-3 px-6 py-3.5 rounded-[22px] transition-all group relative overflow-hidden bg-white/5 hover:bg-[#84ADFF]/20 border border-transparent hover:border-[#84ADFF]/30"
            >
              <div className="relative z-10 w-8 h-8 rounded-xl bg-[#84ADFF]/20 flex items-center justify-center text-[#84ADFF] group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_rgba(132,173,255,0.5)]">
                <Image size={18} />
              </div>
              <div className="flex flex-col items-start pr-2">
                <span className="text-white text-xs font-bold tracking-tight">Gallery</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest font-black">Visual Log</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#84ADFF] shadow-[0_0_8px_#84ADFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <div className="w-px h-8 bg-white/10 mx-1" />

            <Link 
              href="/podcasts" 
              className="flex items-center gap-3 px-6 py-3.5 rounded-[22px] transition-all group relative overflow-hidden bg-white/5 hover:bg-[#F59E0B]/20 border border-transparent hover:border-[#F59E0B]/30"
            >
              <div className="relative z-10 w-8 h-8 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                <Mic size={18} />
              </div>
              <div className="flex flex-col items-start pr-2">
                <span className="text-white text-xs font-bold tracking-tight">Podcasts</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest font-black">Deep Talks</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </main>

      {/* ── Marquee strip at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-3 sm:py-4 mask-marquee overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer transition-opacity duration-300">
          {/* Two sets of items for seamless looping */}
          {[1, 2].map((set) => (
            <div key={set} className="flex items-center gap-8 sm:gap-10 pr-8 sm:pr-10 whitespace-nowrap">
              {displayItems.map((label, i) => (
                <span key={i} className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:text-white/90 transition-colors">
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
