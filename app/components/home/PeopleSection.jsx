"use client";

import React, { useState } from 'react';
import { Users, ArrowRight, Linkedin, ChevronDown, RefreshCw } from 'lucide-react';
import { PEOPLE } from '../../lib/data';

const PH_COLORS = [
  { bg: "#0D1635", text: "#84ADFF", accent: "#3D5BF1" },
  { bg: "#0D1A2D", text: "#6EE7B7", accent: "#059669" },
  { bg: "#1A0F2E", text: "#C4B5FD", accent: "#7C3AED" },
  { bg: "#1A1020", text: "#FDA4AF", accent: "#E11D48" },
  { bg: "#0F1D2E", text: "#7DD3FC", accent: "#0284C7" },
  { bg: "#1A1100", text: "#FCD34D", accent: "#D97706" },
];

function FlipCard({ person, index }) {
  const [flipped, setFlipped] = useState(false);
  const ph = PH_COLORS[index % PH_COLORS.length];
  const initials = person.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="h-[300px] sm:h-[320px] md:h-[340px] cursor-pointer select-none group" style={{ perspective: "1100px" }} onClick={() => setFlipped(f => !f)}>
      <div className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {/* FRONT */}
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-white/10 shadow-[0_2px_14px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all duration-500" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: ph.bg }}>
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: ph.accent }} />
          <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/20 animate-[pulse_2.5s_ease-in-out_infinite]">
            <RefreshCw size={12} className="text-white/70" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[80px] sm:text-[90px] font-black pointer-events-none select-none" style={{ color: ph.accent, opacity: 0.06 }}>{initials}</div>
          <img src={person.img} alt={person.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-0.5 opacity-60" style={{ background: `linear-gradient(to right, transparent, ${ph.accent}, transparent)` }} />
          <div className="absolute bottom-0 w-full px-4 sm:px-5 pb-5 sm:pb-6 pt-8 sm:pt-10 flex flex-col justify-end">
            <p className="text-white font-black text-[14px] sm:text-[16px] leading-tight mb-1 relative z-10 drop-shadow-md">{person.name}</p>
            <p className="font-bold text-[11px] sm:text-[13px] leading-snug mb-2 relative z-10 drop-shadow-md" style={{ color: ph.text }}>{person.role}</p>
            <p className="text-white/60 text-[10px] sm:text-[11px] font-medium relative z-10">Before: <span className="text-white/90 font-bold">{person.prev}</span></p>
            <div className="flex items-center gap-1.5 mt-2 sm:mt-3 text-[10px] uppercase tracking-wider font-bold transition-colors relative z-10" style={{ color: ph.text }}>
              Tap to read <ArrowRight size={10} className="stroke-2" />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-[18px] sm:rounded-[20px] bg-[#0A1228] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col justify-center px-4 sm:px-5 py-4 sm:py-5" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full overflow-hidden border-2 border-[#4361EE]/20 mb-2 sm:mb-3 shrink-0" style={{ background: ph.bg }}>
            <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute top-3 right-3 z-20 bg-[#4361EE]/10 p-1.5 rounded-full border border-[#4361EE]/20 text-[#4361EE] hover:bg-[#4361EE] hover:text-white transition-colors duration-300">
            <RefreshCw size={13} />
          </div>
          <p className="text-white font-black text-[14px] sm:text-[16px] mb-0.5">{person.name}</p>
          <p className="text-[#84ADFF] font-bold text-[10px] sm:text-[11px] mb-2">{person.role}</p>
          <div className="flex-1 flex flex-col justify-center relative mb-3 sm:mb-4">
            <span className="absolute -top-1 -left-1 text-[50px] sm:text-[60px] font-serif leading-none text-white/5 pointer-events-none z-0">&ldquo;</span>
            <p className="text-white/60 text-[11px] sm:text-[12px] leading-[1.4] mt-2 font-medium italic relative z-10 overflow-y-auto scrollbar-hide py-1">&ldquo;{person.desc}&rdquo;</p>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4 mt-auto">
            {person.tags.map(t => (
              <span key={t} className="text-[8px] sm:text-[9.5px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10 text-white/70 bg-white/5">{t}</span>
            ))}
          </div>
          {(person.li || (person.posts && person.posts.length > 0)) && (
            <a
              href={person.li || (typeof person.posts[0] === 'string' ? person.posts[0] : person.posts[0]?.url) || '#'}
              target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex justify-center items-center gap-2 bg-[#4361EE] text-white text-[11px] sm:text-[12px] font-bold px-3 sm:px-4 py-2 sm:py-[10px] rounded-xl hover:bg-[#3451d1] hover:shadow-[0_4px_15px_rgba(67,97,238,0.3)] transition-all duration-300 w-full"
            >
              <Linkedin size={13} className="shrink-0" />
              {person.li ? 'View on LinkedIn' : 'View Post'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PeopleSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden animate-fadeUp border-y border-white/5" style={{ background: "#060D25", animationFillMode: 'both' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-[-5%] left-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#3D5BF1] opacity-10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-4 sm:mb-6 text-[10px] font-bold tracking-widest text-white/40 uppercase backdrop-blur-md">
            <Users size={13} className="text-[#84ADFF]" /> People I&apos;ve Impacted
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-tighter font-black text-white mb-3 sm:mb-4 leading-[1.1]">
            Students. Leaders. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Builders.</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed font-medium px-4">
            A glimpse of the incredible people who&apos;ve been part of the journey — click any card to flip and know more.
          </p>
        </div>

        <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${expanded ? 'max-h-[5000px]' : 'max-h-[980px] sm:max-h-[1050px] md:max-h-[720px] lg:max-h-[530px]'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 pb-8">
            {PEOPLE.map((person, i) => <FlipCard key={person.name} person={person} index={i} />)}
          </div>
          {!expanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] sm:h-[260px] z-10" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(6,13,37,0.2) 30%, rgba(6,13,37,0.75) 60%, rgba(6,13,37,0.97) 85%, #060D25 100%)" }} />
          )}
        </div>

        <div className="relative mt-6 sm:mt-8 text-center z-20">
          <button onClick={() => setExpanded(e => !e)} className="group relative z-20 inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(61,91,241,0.18) 0%, rgba(132,173,255,0.08) 100%)', border: '1px solid rgba(61,91,241,0.4)', backdropFilter: 'blur(14px)', color: 'rgba(255,255,255,0.85)' }}>
            <span className="w-2 h-2 rounded-full bg-[#3D5BF1] animate-pulse shrink-0" />
            {expanded ? "See Less" : "See More"}
            <ChevronDown size={15} className={`transition-transform duration-300 text-[#84ADFF] ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
