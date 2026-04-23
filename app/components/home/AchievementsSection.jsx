"use client";

import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { ACHIEVEMENTS, CERTS } from '../../lib/data';

export default function AchievementsSection() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(67,97,238,0.08), transparent 60%), radial-gradient(ellipse at bottom left, rgba(16,185,129,0.05), transparent 60%)' }} />
      <div className="absolute top-0 left-[20%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px]" style={{ background: 'rgba(67,97,238,0.25)' }} />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]" style={{ background: 'rgba(124,58,237,0.15)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0D1635] border border-[#5363B1]/25 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6">
            <Award size={12} className="text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">Achievements &amp; Certifications</h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="group relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-[#5363B1]/20 bg-[#060D25]/60 backdrop-blur-xl hover:-translate-y-2 hover:border-[#5363B1]/35 hover:bg-[#060D25]/80 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(67,97,238,0.15)] flex flex-col">
              <div className="h-36 sm:h-44 md:h-52 relative overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 z-20" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,14,36,0.95) 100%)' }} />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="p-5 sm:p-6 md:p-7 pt-2 relative z-30 flex-1 flex flex-col justify-end">
                <div className="mb-3 sm:mb-4">
                  <span className="bg-white/10 text-white/80 border border-[#5363B1]/25 text-[8px] sm:text-[9px] font-black px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest w-fit inline-block">Milestone</span>
                </div>
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl">{a.icon}</span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>{a.title}</h3>
                </div>
                <p className="text-white/40 text-[12px] sm:text-[13px] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-4 sm:mb-6 flex items-center gap-3">
            <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-white/10 border border-[#5363B1]/25 flex items-center justify-center">
              <GraduationCap size={14} className="text-white/80" />
            </div>
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {CERTS.map((c, i) => (
              <div key={i} className="group rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-[#5363B1]/20 bg-[#060D25]/50 backdrop-blur-md hover:bg-white/10 hover:border-[#5363B1]/35 transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-row items-center gap-3 sm:gap-4 md:gap-5 hover:shadow-[0_10px_30px_rgba(67,97,238,0.1)]">
                <div className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 rounded-xl overflow-hidden border border-[#5363B1]/25 relative shadow-lg">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl mr-2 inline-block">{c.icon}</div>
                  <h4 className="font-bold text-white text-[13px] sm:text-[14px] md:text-[15px] mb-0.5" style={{ letterSpacing: '-0.01em' }}>{c.name}</h4>
                  <p className="text-white/40 text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-widest font-bold">{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
