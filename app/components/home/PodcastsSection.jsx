"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Mic, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { PODCASTS } from '../../lib/data';

export default function PodcastsSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  // Native auto-scroll
  useEffect(() => {
    let intervalId;
    // Auto-scroll when not hovered and no video is playing
    if (activeVideoIndex === null && !isHovered) {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }, 25);
    }
    return () => clearInterval(intervalId);
  }, [activeVideoIndex, isHovered]);

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full opacity-40 pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(132,173,255,0.15) 0%, transparent 60%)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-30 pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.1) 0%, transparent 60%)' }} />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0D1635] border border-[#5363B1]/40 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Mic size={13} className="text-[#84ADFF]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#84ADFF]">Podcast &amp; Talks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-2">
              Listen &amp; <span className="blue-grad-text">Learn</span>
            </h2>
            <p className="text-white/50 max-w-md text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
              Deep-dive conversations on education, product thinking, and building communities that scale.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 self-end sm:self-auto">
            <button onClick={slideLeft} className="w-12 h-12 rounded-full border border-white/10 bg-[#0D1635] hover:bg-[#3D5BF1] hover:border-[#3D5BF1] flex items-center justify-center text-white/70 hover:text-white transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <ChevronLeft size={24} />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-full border border-white/10 bg-[#0D1635] hover:bg-[#3D5BF1] hover:border-[#3D5BF1] flex items-center justify-center text-white/70 hover:text-white transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scroll horizontally container */}
        <div className="-mx-4 sm:-mx-6 md:-mx-10 overflow-hidden">
          <div 
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-3 sm:py-4 px-4 sm:px-6 gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
          >
            {[...PODCASTS, ...PODCASTS, ...PODCASTS].map((p, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] lg:w-[400px] shrink-0 group rounded-[1.5rem] sm:rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-[#5363B1]/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(61,91,241,0.15)] transition-all duration-500 flex flex-col bg-white/5 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="aspect-video relative overflow-hidden border-b border-white/5 bg-[#060D25] p-1.5 sm:p-2 pt-1.5 sm:pt-2">
                  <div className="w-full h-full rounded-[1.2rem] sm:rounded-[1.8rem] overflow-hidden relative border border-white/10 shadow-inner group/video cursor-pointer" onClick={() => setActiveVideoIndex(i)}>
                    {activeVideoIndex === i ? (
                      <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${p.videoId}?rel=0&autoplay=1`} title={p.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    ) : (
                      <>
                        <img src={`https://img.youtube.com/vi/${p.videoId}/mqdefault.jpg`} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-all duration-700" />
                        <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover/video:scale-110 group-hover/video:bg-blue-600/80 transition-all duration-300">
                            <Play size={20} className="text-white fill-white ml-1" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-7 flex flex-col flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {p.tags.map((t, j) => (
                        <span key={j} className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#3D5BF1]/15 border border-[#3D5BF1]/30 text-[#84ADFF]">{t}</span>
                      ))}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full text-white/50 border border-white/10 bg-black/20 shrink-0 ml-1">{p.duration}</span>
                  </div>

                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-black text-white mb-2 sm:mb-3 leading-tight group-hover:text-[#84ADFF] transition-colors">{p.title}</h3>
                  <p className="text-white/60 text-[12px] sm:text-[14px] leading-relaxed mb-4 sm:mb-6 flex-1">{p.desc}</p>

                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#060D25]/50 border border-white/5 mb-4 sm:mb-6 group-hover:border-[#5363B1]/30 transition-colors">
                    <div>
                      <div className="text-[9px] sm:text-[10px] text-[#84ADFF] font-black uppercase tracking-widest mb-0.5 opacity-80">Featuring</div>
                      <div className="text-white font-bold text-[12px] sm:text-[14px] leading-none">{p.guestName}</div>
                      <div className="text-white/40 text-[10px] sm:text-[11px] font-medium mt-0.5">{p.guestOrg}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 sm:pt-5 border-t border-white/5">
                    <span className="text-white/30 text-[10px] sm:text-[11px] font-medium">{p.date}</span>
                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-[#0A0A0B] text-[11px] sm:text-[13px] font-bold transition-all bg-white/10 hover:bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 hover:scale-105">
                      <Play size={10} className="fill-current" /> YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
