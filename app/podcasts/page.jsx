"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import SubNavbar from '../components/common/SubNavbar';
import ContactSection from '../components/home/ContactSection';
import { Mic, Play, Calendar, Clock, ArrowRight, Video, Youtube } from 'lucide-react';
import { PODCASTS, VIDEO_TESTIMONIALS } from '../lib/data';

export default function PodcastsPage() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar />
      <SubNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Mic size={16} className="text-[#84ADFF]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Audio-Visual Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
            Podcasts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Talks.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Deep-dive conversations on education, product thinking, and building communities that scale. Featuring industry luminaries and technical visionaries.
          </p>
        </div>
      </section>

      {/* Featured Podcasts Section */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PODCASTS.map((p, i) => (
              <div key={i} className="group relative rounded-[40px] bg-[#0D1635] border border-white/5 overflow-hidden hover:border-[#3D5BF1]/30 transition-all shadow-2xl flex flex-col xl:flex-row">
                <div className="xl:w-[45%] aspect-video xl:aspect-auto bg-black relative">
                   {activeVideoId === p.videoId ? (
                     <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${p.videoId}?rel=0&autoplay=1`} frameBorder="0" allowFullScreen />
                   ) : (
                     <>
                        <img src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={p.title} />
                        <button onClick={() => setActiveVideoId(p.videoId)} className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#3D5BF1]/80 transition-all shadow-2xl">
                             <Play size={32} className="text-white fill-white ml-1" />
                          </div>
                        </button>
                     </>
                   )}
                </div>
                <div className="xl:w-[55%] p-8 sm:p-10 flex flex-col justify-center">
                   <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-[#3D5BF1]/10 border border-[#3D5BF1]/20 text-[#84ADFF] text-[10px] font-black uppercase tracking-widest">{t}</span>
                      ))}
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight group-hover:text-[#84ADFF] transition-colors">{p.title}</h3>
                   <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8">{p.desc}</p>
                   <div className="flex items-center gap-6 mt-auto">
                      <div className="flex items-center gap-2 text-white/30 text-[11px] font-bold uppercase tracking-widest">
                        <Clock size={14} /> {p.duration}
                      </div>
                      <div className="flex items-center gap-2 text-white/30 text-[11px] font-bold uppercase tracking-widest">
                        <Calendar size={14} /> {p.date}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Sessions (Short Videos) */}
      <section className="pb-32 px-4 sm:px-6 md:px-10 border-t border-white/5 pt-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <Video size={14} className="text-[#84ADFF]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Community Sessions</span>
             </div>
             <h2 className="text-3xl sm:text-4xl font-black mb-4">Highlights & Talks</h2>
             <p className="text-white/40 max-w-xl">Curated snippets from live sessions, mentorship calls, and industry panels.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-[#0D1635] border border-white/5 hover:border-[#3D5BF1]/30 transition-all shadow-2xl">
                <div className="aspect-video w-full bg-black relative">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full" 
                    src={`https://www.youtube.com/embed/${v.videoId}?rel=0`} 
                    title={v.name} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
                <div className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-lg text-[#84ADFF]">
                      {v.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">{v.name}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">{v.role} • {v.org}</div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
