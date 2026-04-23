"use client";

import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { KEY_PROJECT } from '../../lib/data';

export default function KeyProjectSection() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10" style={{ background: '#060D25' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0D1635] border border-[#5363B1]/25 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            <Zap size={12} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Key Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4 px-2">{KEY_PROJECT.title}</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base px-4">{KEY_PROJECT.subtitle}</p>
        </div>

        <div className="rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center border border-[#5363B1]/25 bg-[#0D1635] hover:border-[#5363B1]/50 transition-all">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">What I Built</h3>
            <ul className="space-y-3 sm:space-y-4">
              {KEY_PROJECT.bullets.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <CheckCircle2 size={16} className="text-white/40 shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-6 sm:mt-8">
              {KEY_PROJECT.tags.map(t => (
                <span key={t} className="bg-[#0D1635] border border-[#5363B1]/35 text-white/80 text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full hover:scale-105 transition-transform">{t}</span>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-[#5363B1]/25 relative group">
            <img src={KEY_PROJECT.img} alt={KEY_PROJECT.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1635] to-transparent flex items-end p-4 sm:p-6">
              <div>
                <div className="bg-white/10 border border-[#5363B1]/25 text-white/90 text-[9px] sm:text-xs font-black px-2.5 sm:px-3 py-1 rounded-full mb-2 inline-block">{KEY_PROJECT.liveLabel}</div>
                <p className="text-white font-bold text-sm sm:text-base">{KEY_PROJECT.liveTitle}</p>
                <p className="text-white/50 text-[11px] sm:text-xs">{KEY_PROJECT.liveSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
