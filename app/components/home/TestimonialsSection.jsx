"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { VIDEO_TESTIMONIALS, TESTIMONIALS } from '../../lib/data';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 overflow-hidden relative" style={{ background: '#060D25' }}>
      <div className="absolute top-[-10%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(61,91,241,0.08) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#0D1635] border border-[#5363B1]/25 shadow-sm mb-4 sm:mb-6 text-[10px] font-bold tracking-widest text-white/70 uppercase mx-auto">
            <Star size={11} className="text-[#F59E0B] fill-[#F59E0B]" /> Student Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 sm:mb-3 px-2" style={{ fontWeight: 300 }}>
            What Students <span style={{ fontWeight: 700 }} className="blue-grad-text">Say About Me</span>
          </h2>
          <p className="text-white/50 font-medium max-w-lg mx-auto text-sm sm:text-base px-4">Real words and incredible experiences from the students I&apos;ve had the privilege to mentor.</p>
        </div>

        {/* Video Testimonials Marquee */}
        <div className="mb-8 sm:mb-12 -mx-4 sm:-mx-6 md:-mx-10 overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-3 sm:py-4 px-4 sm:px-6 gap-4 sm:gap-6">
            {[...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS].map((v, i) => (
              <div key={i} className="relative w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] shrink-0 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden border border-[#5363B1]/25 bg-[#0D1635] hover:border-[#5363B1]/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col group">
                <div className="aspect-video w-full bg-black relative border-b border-[#5363B1]/20">
                  <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${v.videoId}?rel=0`} title={v.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div className="p-4 sm:p-5 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white leading-tight mb-0.5 text-sm sm:text-base">{v.name}</div>
                    <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-semibold">{v.role} • {v.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-[#5363B1]/20 hover:-translate-y-2 transition-all duration-500 hover:border-[#5363B1]/45 group relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1635 0%, #0A1228 100%)' }}>
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#3D5BF1]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center gap-1 sm:gap-1.5 mb-4 sm:mb-6 relative z-10">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#84ADFF] ml-2 border border-[#84ADFF]/20 px-2 py-0.5 rounded-full bg-[#3D5BF1]/15">{t.platform}</span>
              </div>
              <p className="text-white/60 leading-relaxed italic mb-6 sm:mb-8 text-[13px] sm:text-[15px] group-hover:text-white/85 transition-colors relative z-10">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                <img src={t.img} alt={t.name} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-[2px] border-[#5363B1]/30 shadow-lg group-hover:border-[#3D5BF1]/60 group-hover:scale-110 transition-all" />
                <div>
                  <div className="text-white font-black text-[14px] sm:text-[15px]">{t.name}</div>
                  <div className="text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
