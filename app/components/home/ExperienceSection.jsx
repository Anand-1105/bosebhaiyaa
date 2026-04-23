"use client";

import React, { useState } from 'react';
import { Zap, CalendarDays, ArrowRight, ChevronDown, Building2, ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '../../lib/data';

const ORG_EMOJIS = ['🏫', '💡', '🏛️', '🛡️', '🤝', '💼', '🚀'];

export default function ExperienceSection({ onExpClick }) {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <section id="experience" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <Zap size={14} className="text-[#84ADFF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Professional Roadmap</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white leading-none">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Experience.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            A journey through my professional roles, delivering impact and building scalable real-world products across diverse industries.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayed.map((e, i) => (
            <div
              key={i}
              onClick={() => onExpClick?.(e)}
              className="group relative flex flex-col p-8 rounded-[2.5rem] border border-white/5 bg-[#0D1635]/50 backdrop-blur-sm transition-all duration-500 hover:border-[#3D5BF1]/50 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              {/* Glow Accent */}
              <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    {ORG_EMOJIS[i] || '💼'}
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-[#84ADFF] group-hover:border-[#3D5BF1]/30 transition-all">
                    {e.period}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-[#84ADFF] transition-colors">{e.role}</h3>
                <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[11px] mb-6">
                   <Building2 size={12} className="opacity-50" />
                   {e.org}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <div className="flex items-center justify-between group/btn">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">See Detailed Impact</span>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#3D5BF1] group-hover:border-[#3D5BF1] transition-all">
                         <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
           {!showAll && EXPERIENCE.length > 3 && (
             <button 
               onClick={() => setShowAll(true)}
               className="group px-10 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase text-xs tracking-widest transition-all hover:bg-white hover:text-black flex items-center gap-3 shadow-2xl"
             >
               See All Experience
               <span className="text-white/40 group-hover:text-black/40 font-bold">+{EXPERIENCE.length - 3}</span>
               <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
             </button>
           )}
           
           {showAll && (
             <button 
               onClick={() => setShowAll(false)}
               className="px-8 py-4 rounded-full border border-white/5 text-white/30 font-black uppercase text-xs tracking-widest hover:text-white hover:border-white/20 transition-all"
             >
               Show Less
             </button>
           )}
        </div>

        {/* Global CTA */}
        <div className="mt-32 relative rounded-[3rem] p-12 overflow-hidden border border-white/5 bg-gradient-to-br from-[#0D1635] to-transparent group">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3D5BF1]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#84ADFF] mb-4">Network // Collaboration</div>
                 <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">Looking for a technical <br />partner or consultant?</h3>
                 <p className="text-white/40 text-lg">I collaborate with brands, startups, and institutions to build high-impact technical ecosystems.</p>
              </div>
              <a 
                href="/hire" 
                className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                Start a Discussion <ExternalLink size={18} />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
