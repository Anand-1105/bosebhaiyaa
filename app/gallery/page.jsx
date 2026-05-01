"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import SubNavbar from '../components/common/SubNavbar';
import ContactSection from '../components/home/ContactSection';
import { Users, ArrowRight, Linkedin, RefreshCw, Star } from 'lucide-react';
import { PEOPLE, CLASSROOM_PHOTOS } from '../lib/data';
import ImageLightbox from '../components/common/ImageLightbox';

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
    <div className="h-[320px] sm:h-[350px] cursor-pointer select-none group" style={{ perspective: "1100px" }}>
      <div className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {/* FRONT */}
        <div 
          className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group-hover:border-white/20 transition-all duration-500" 
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            background: ph.bg,
            zIndex: flipped ? 0 : 10,
            pointerEvents: flipped ? 'none' : 'auto'
          }}
          onClick={() => setFlipped(true)}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: ph.accent }} />
          <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/20 animate-[pulse_2.5s_ease-in-out_infinite]">
            <RefreshCw size={12} className="text-white/70" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[80px] font-black pointer-events-none select-none" style={{ color: ph.accent, opacity: 0.06 }}>{initials}</div>
          <img src={person.img} alt={person.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 w-full px-5 pb-6 pt-10 flex flex-col justify-end">
            <p className="text-white font-black text-[16px] sm:text-[18px] leading-tight mb-1 relative z-10">{person.name}</p>
            <p className="font-bold text-[12px] sm:text-[14px] leading-snug mb-2 relative z-10" style={{ color: ph.text }}>{person.role}</p>
            <p className="text-white/60 text-[11px] font-medium relative z-10">Previously: <span className="text-white/90 font-bold">{person.prev}</span></p>
            <div className="flex items-center gap-1.5 mt-3 text-[10px] uppercase tracking-wider font-bold relative z-10" style={{ color: ph.text }}>
              Tap to Flip <ArrowRight size={10} />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 rounded-[24px] bg-[#0A1228] border border-white/10 shadow-2xl flex flex-col justify-center px-6 py-6" 
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden", 
            transform: "rotateY(180deg)",
            zIndex: flipped ? 10 : 0,
            pointerEvents: flipped ? 'auto' : 'none'
          }}
          onClick={(e) => {
            if (e.target.closest('a')) return;
            setFlipped(false);
          }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#4361EE]/20 mb-4 shrink-0" style={{ background: ph.bg }}>
            <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top" />
          </div>
          <p className="text-white font-black text-[16px] mb-0.5">{person.name}</p>
          <p className="text-[#84ADFF] font-bold text-[11px] mb-3">{person.role}</p>
          <div className="flex-1 flex flex-col justify-center relative mb-4">
            <p className="text-white/60 text-[12px] leading-[1.5] font-medium italic relative z-10 overflow-y-auto scrollbar-hide py-1">"{person.desc}"</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            {person.tags.map(t => (
              <span key={t} className="text-[9px] font-bold px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-white/5">{t}</span>
            ))}
          </div>
          {person.li && (
            <a 
              href={person.li} 
              target="_blank" 
              rel="noreferrer" 
              className="relative z-30 flex justify-center items-center gap-2 bg-[#4361EE] text-white text-[12px] font-bold px-4 py-3 rounded-xl hover:bg-[#3451d1] transition-all w-full active:scale-[0.98] shadow-lg shadow-[#4361EE]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={14} className="relative z-10" /> 
              <span className="relative z-10">View Professional Profile</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#060D25] text-white selection:bg-[#3D5BF1]/30">
      <Navbar />
      <SubNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fadeUp">
            Students. Leaders. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Builders.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            A curated collection of the high-impact individuals who have been part of the Techfluence journey and beyond. From FAANG engineers to visionary founders, these are the people shaping the future.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {PEOPLE.map((person, i) => (
              <div key={`${person.name}-${i}`} className="animate-fadeUp" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                <FlipCard person={person} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Moments Section */}
      <section className="pb-32 px-4 sm:px-6 md:px-10 border-t border-white/5 pt-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Star size={14} className="text-[#84ADFF]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Execution & Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Moments outside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Classroom.</span></h2>
            <p className="text-white/40 max-w-xl">A visual archive of live sessions, technical workshops, and community building in action.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {CLASSROOM_PHOTOS.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl border border-white/5 bg-[#0D1635] break-inside-avoid shadow-xl transition-all hover:border-[#3D5BF1]/30">
                <ImageLightbox images={CLASSROOM_PHOTOS} index={i}>
                  <img 
                    src={img.src} 
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                    alt={img.alt} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </ImageLightbox>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ContactSection />
    </main>
  );
}
