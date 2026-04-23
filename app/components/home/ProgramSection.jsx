"use client";

import React from 'react';
import { Linkedin, ArrowUpRight, Grid } from 'lucide-react';
import { CLASSROOM_REDIRECT } from '../../lib/data';

export default function ProgramSection() {
  return (
    <section id="program" className="w-full py-32 px-6 sm:px-10 lg:px-16 relative bg-black overflow-hidden border-t border-white/5">
      {/* Blueprint Lines Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
           <Grid size={14} className="text-white/40" />
           <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Execution // Live Updates</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-10 leading-none">
          Out from the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1] italic">Classroom.</span>
        </h2>

        <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-xl leading-relaxed mb-16">
          Real-world execution doesn&apos;t stop at the desk. For live session updates, classroom highlights, and the latest community impact reports, follow the journey on LinkedIn.
        </p>

        <a 
          href={CLASSROOM_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-[#0A66C2] text-white font-black uppercase text-sm tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(10,102,194,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Linkedin size={20} fill="currentColor" />
          Follow the Execution
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="mt-20 flex items-center justify-center gap-12 opacity-20">
           <div className="h-px w-24 bg-gradient-to-r from-transparent to-white" />
           <div className="text-[10px] font-black uppercase tracking-[0.4em]">LinkedIn Verified Journey</div>
           <div className="h-px w-24 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}
