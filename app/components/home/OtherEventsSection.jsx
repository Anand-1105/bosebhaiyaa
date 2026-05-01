"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import { OTHER_EVENTS } from '../../lib/data';

export default function OtherEventsSection() {
  const [activeOtherEvent, setActiveOtherEvent] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(0);
  const [activeGalleryEvent, setActiveGalleryEvent] = useState(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveOtherEvent(hoveredEvent);
    }, 40); // Minimal delay to prevent jitter while keeping it responsive
    return () => clearTimeout(timer);
  }, [hoveredEvent]);

  useEffect(() => {
    document.body.style.overflow = activeGalleryEvent !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeGalleryEvent]);

  const accentColors = OTHER_EVENTS.map(e => e.color);

  return (
    <>
      <section id="other-events" className="w-full relative py-20 sm:py-32 px-4 sm:px-6 md:px-10 overflow-hidden" style={{ background: '#060D25', contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
        <div className="max-w-[1400px] mx-auto relative z-10">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 animate-fadeUp will-change-[opacity,transform] gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-tight text-white/90">
              Campus Stage. <span className="text-white/60">National Impact.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-lg max-w-md">
              A cinematic look at the high-impact summits, hackathons, and global talks that shaped the community.
            </p>
          </div>

          {/* Horizontal Accordion — vertical on mobile */}
          <div className="flex flex-col lg:flex-row w-full gap-3 sm:gap-4" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="hidden lg:flex lg:flex-row w-full h-[700px] xl:h-[750px] gap-4">
              {OTHER_EVENTS.map((event, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredEvent(i)}
                  onClick={() => setActiveOtherEvent(i)}
                  className={`relative overflow-hidden rounded-[2rem] xl:rounded-[2.5rem] transition-[flex-grow,box-shadow,opacity,border-color] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group will-change-[flex-grow,box-shadow] transform-gpu ${activeOtherEvent === i
                    ? 'flex-[3.2] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/20'
                    : 'flex-[0.8] opacity-60 hover:opacity-100 border border-white/5'
                  }`}
                >
                  <img 
                    src={event.gallery[0].src} 
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform transform-gpu ${activeOtherEvent === i ? 'scale-105' : 'scale-100'}`} 
                    alt={event.title} 
                  />
                  <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000 will-change-opacity" style={{ background: `radial-gradient(circle at 50% 100%, ${event.color}40 0%, transparent 70%)`, opacity: activeOtherEvent === i ? 1 : 0 }} />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${activeOtherEvent === i ? 'bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent' : 'bg-black/70 group-hover:bg-black/50'}`} />

                  <div className={`absolute -bottom-10 right-10 text-[14rem] sm:text-[16rem] md:text-[18rem] font-black text-white/[0.03] leading-none transition-[transform,opacity] duration-[1000ms] will-change-transform pointer-events-none ${activeOtherEvent === i ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>0{i + 1}</div>

                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeOtherEvent === i ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
                    <h3 className="text-white font-black text-3xl tracking-[0.2em] uppercase origin-center -rotate-90 whitespace-nowrap drop-shadow-2xl opacity-80">{event.title}</h3>
                  </div>

                  <div className={`absolute inset-0 p-8 md:p-12 xl:p-16 flex flex-col justify-end transition-[transform,opacity] duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[transform,opacity] ${activeOtherEvent === i ? 'opacity-100 translate-y-0 delay-300 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest backdrop-blur-md">{event.subtitle}</div>
                        <div className="text-[#84ADFF] font-black text-sm tracking-widest uppercase">{event.date}</div>
                      </div>
                      <h3 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">{event.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed mb-10 line-clamp-2">{event.description}</p>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/20 pt-8">
                        <div className="flex flex-wrap gap-4 md:gap-8">
                          {event.stats.map((stat, idx) => (
                            <div key={idx} className="backdrop-blur-xl bg-white/5 border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-3">
                              <div className="text-3xl xl:text-4xl font-black text-white">{stat.value}</div>
                              <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold w-20">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <button onClick={() => setActiveGalleryEvent(activeOtherEvent)} className="hidden md:flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                          Explore Gallery <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile version — stacked cards */}
            <div className="flex lg:hidden flex-col gap-4">
              {OTHER_EVENTS.map((event, i) => (
                <div key={i} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 cursor-pointer" onClick={() => setActiveOtherEvent(activeOtherEvent === i ? -1 : i)}>
                  <div className="relative h-[220px] sm:h-[280px]">
                    <img 
                      src={event.gallery[0].src} 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover" 
                      alt={event.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase border border-white/20">{event.subtitle}</span>
                        <span className="text-[#84ADFF] text-[10px] font-bold uppercase">{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                  {activeOtherEvent === i && (
                    <div className="bg-[#0A1228] p-5 border-t border-white/10">
                      <div className="flex flex-wrap gap-3 mb-4">
                        {event.stats.map((stat, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                            <div className="text-xl font-black text-white">{stat.value}</div>
                            <div className="text-[9px] text-white/50 uppercase tracking-widest font-bold">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <ul className="space-y-1">
                        {event.highlights.map((h, hi) => (
                          <li key={hi} className="text-white/60 text-xs flex items-start gap-2">
                            <span className="text-[#84ADFF] mt-0.5">•</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeGalleryEvent !== null && (
        <div className="fixed inset-0 z-[300] bg-black flex flex-col animate-[fadeIn_0.3s_ease]">
          <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-black/80 backdrop-blur z-20">
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">{OTHER_EVENTS[activeGalleryEvent].title}</h3>
              <p className="text-white/50 text-xs sm:text-sm uppercase tracking-widest">{OTHER_EVENTS[activeGalleryEvent].date}</p>
            </div>
            <button onClick={() => { setActiveGalleryEvent(null); setLightboxImageIndex(0); }} className="text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 relative flex items-center justify-center p-4">
            <div className="absolute inset-0 z-0 bg-cover bg-center blur-[100px] opacity-40 scale-110" style={{ backgroundImage: `url(${OTHER_EVENTS[activeGalleryEvent].gallery[lightboxImageIndex].src})` }} />
            <div className="relative z-10 flex flex-col items-center max-w-full">
              <img 
                key={lightboxImageIndex} 
                src={OTHER_EVENTS[activeGalleryEvent].gallery[lightboxImageIndex].src} 
                alt="Gallery" 
                className="max-w-full max-h-[60vh] object-contain shadow-2xl rounded-lg" 
              />
              <div className="mt-4 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center max-w-[90%] animate-fadeUp">
                <p className="text-white text-base sm:text-lg font-medium tracking-tight">
                  {OTHER_EVENTS[activeGalleryEvent].gallery[lightboxImageIndex].label}
                </p>
              </div>
            </div>
            <button onClick={() => setLightboxImageIndex(p => Math.max(0, p - 1))} disabled={lightboxImageIndex === 0} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 disabled:opacity-20 transition-all z-20">
              <ChevronDown size={20} className="rotate-90" />
            </button>
            <button onClick={() => setLightboxImageIndex(p => Math.min(OTHER_EVENTS[activeGalleryEvent].gallery.length - 1, p + 1))} disabled={lightboxImageIndex === OTHER_EVENTS[activeGalleryEvent].gallery.length - 1} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 disabled:opacity-20 transition-all z-20">
              <ChevronDown size={20} className="-rotate-90" />
            </button>
          </div>
          <div className="h-20 sm:h-24 md:h-28 bg-black/80 backdrop-blur z-20 border-t border-white/10 flex items-center px-4 sm:px-6 gap-3 sm:gap-4 overflow-x-auto scrollbar-hide">
            {OTHER_EVENTS[activeGalleryEvent].gallery.map((imgPath, idx) => (
              <button key={idx} onClick={() => setLightboxImageIndex(idx)} className={`shrink-0 w-24 sm:w-32 md:w-40 aspect-video rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${lightboxImageIndex === idx ? 'border-white opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                <img src={imgPath.src} loading="lazy" className="w-full h-full object-cover" alt="Thumbnail" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
