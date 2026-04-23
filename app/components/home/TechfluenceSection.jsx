"use client";

import React, { useState } from 'react';
import { Globe, Users, MessageSquare, ArrowRight, Linkedin, Star, ChevronDown } from 'lucide-react';
import { TECHFLUENCE } from '../../lib/data';

export default function TechfluenceSection({ onGuestClick }) {
  const [activeEdition, setActiveEdition] = useState(0);
  const [showMoreImages, setShowMoreImages] = useState(false);

  const ev = TECHFLUENCE[activeEdition];

  return (
    <section id="techfluence" className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(61,91,241,0.12) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(65,121,234,0.08) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="section-badge mb-4 sm:mb-6 mx-auto"><Globe size={12} /> Flagship Series</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-white mb-3 sm:mb-4" style={{ fontWeight: 300 }}>
            Techfluence <span style={{ fontWeight: 700 }} className="blue-grad-text">6 Seasons</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base px-4">
            India&apos;s most impactful university-led tech community event series — 9M+ cumulative reach, 30+ global leaders.
          </p>
        </div>

        {/* Season Tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {TECHFLUENCE.map((ev, i) => (
            <button
              key={i}
              onClick={() => { setActiveEdition(i); setShowMoreImages(false); }}
              style={activeEdition === i ? { background: 'linear-gradient(180deg,#3D5BF1,#4179EA,#84ADFF)', boxShadow: '0 0 20px rgba(61,91,241,0.4)' } : {}}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${activeEdition === i ? 'text-white scale-105' : 'bg-[#202D61] text-white/70 hover:bg-[#2A3A7A] hover:text-white'}`}
            >
              Season{ev.edition}
            </button>
          ))}
        </div>

        {/* Active Season Detail */}
        <div key={activeEdition} className="animate-fadeUp">
          {/* Hero Banner (Refined aesthetics without image) */}
          <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-8 sm:mb-10 border border-[#5363B1]/40 shadow-[0_20px_60px_rgba(13,22,53,0.5)]">
            <div className="min-h-[250px] sm:min-h-[300px] md:min-h-[350px] relative overflow-hidden bg-gradient-to-br from-[#060D25] via-[#0D1635] to-[#14214D]">
              {/* Dynamic decorative elements */}
              <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[#3D5BF1]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-50%] left-[-20%] w-[60%] h-[120%] bg-[#84ADFF]/5 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Abstract grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

              <div className="absolute inset-0 flex flex-col justify-end sm:justify-center p-6 sm:p-10 md:p-14 z-10">
                <div className="flex gap-3 mb-4 sm:mb-5">
                  <span className="bg-[#3D5BF1]/20 text-[#84ADFF] text-[9px] sm:text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-[0.2em] border border-[#3D5BF1]/30">Season {ev.edition}</span>
                  <span className="bg-white/5 backdrop-blur text-white/80 text-[9px] sm:text-[11px] font-bold px-3.5 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">{ev.date}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 leading-tight mb-3 sm:mb-4 tracking-tight">{ev.title}</h3>
                <p className="text-[#84ADFF]/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 sm:line-clamp-none font-medium">{ev.desc}</p>
                
                {/* Stats Container shifted slightly */}
                <div className="flex flex-wrap gap-6 sm:gap-10 mt-6 sm:mt-10 pt-6 border-t border-white/10">
                  {[['Reach', ev.reach], ['Attendees', ev.attendees], ['Comments', ev.comments || '500+'], ['Speakers', `${ev.guests.length}+`]].map(([label, val]) => (
                    <div key={label} className="relative group">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">{val}</div>
                      <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Guest Speakers */}
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-[#5363B1]/20 overflow-hidden bg-[#0A1228] shadow-[0_15px_60px_rgba(0,0,0,0.4)] mb-8 sm:mb-10">
            <div className="p-5 sm:p-7 border-b border-[#5363B1]/10 bg-[#0D1635]/50 flex items-center gap-3 sm:gap-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#3D5BF1]/10 flex items-center justify-center border border-[#3D5BF1]/20">
                <Users size={18} className="text-[#84ADFF]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-white leading-tight">Elite Guest Speakers</h4>
                <p className="text-white/30 text-[10px] sm:text-[11px] uppercase tracking-widest font-bold">Industry Leaders & Pioneers</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ev.guests.map((g, j) => {
                const guestImg = g.img || `/img/gallery/${(j + 1 + activeEdition * 3) % 20 + 1}.jpeg`;
                return (
                  <div
                    key={j}
                    onClick={() => onGuestClick?.({ ...g, img: guestImg, season: ev.edition })}
                    className="group flex flex-col gap-4 sm:gap-5 bg-gradient-to-b from-[#14214D]/40 to-transparent p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-[#3D5BF1]/40 hover:from-[#14214D]/80 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-full bg-[#3D5BF1]/5 skew-x-[30deg] translate-x-12 sm:translate-x-16 group-hover:translate-x-8 sm:group-hover:translate-x-12 transition-transform duration-700 pointer-events-none" />
                    <div className="flex items-start justify-between relative z-10">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#5363B1]/30 p-0.5 sm:p-1 bg-[#0A1228] group-hover:border-[#3D5BF1]/60 transition-all duration-500">
                        <img src={guestImg} alt={g.name} className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                      </div>
                      <div onClick={(e) => e.stopPropagation()}>
                        <a href={g.linkedin} target="_blank" rel="noreferrer" className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center bg-white/5 hover:bg-[#0A66C2] text-white/40 hover:text-white border border-white/10 hover:border-[#3D5BF1]/40 rounded-xl transition-all">
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <span className="text-[10px] text-[#84ADFF] font-black uppercase tracking-widest bg-[#3D5BF1]/10 px-2 sm:px-2.5 py-1 rounded-md inline-block max-w-[90%] truncate mb-2 sm:mb-3 border border-[#3D5BF1]/20" title={g.tag || 'Special Guest'}>{g.tag || 'Special Guest'}</span>
                      <h5 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#84ADFF] transition-colors mb-1 sm:mb-2">{g.name}</h5>
                      <p className="text-white/50 text-[12px] sm:text-[13px] leading-relaxed line-clamp-3 pr-2 sm:pr-4">{g.desc}</p>
                    </div>
                    <div className="mt-auto pt-3 sm:pt-4 flex items-center justify-between relative z-10 border-t border-white/5 text-white/30 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                      <span>See Impact Bio</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>



          {/* Testimonials Marquee */}
          {/* {ev.commentsList && ev.commentsList.length > 0 && (
            <div className="py-8 sm:py-10 border-y border-[#5363B1]/10 overflow-hidden relative mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8 px-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-[#3D5BF1]/10 flex items-center justify-center border border-[#3D5BF1]/20">
                  <MessageSquare size={16} className="text-[#84ADFF]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white tracking-tight leading-none mb-0.5">Peer Resonance</h4>
                  <p className="text-white/30 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em]">Community Feedback & Impact</p>
                </div>
              </div>
              <div className="relative w-full mask-marquee">
                <div className="flex gap-4 sm:gap-6 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap w-[max-content]">
                  {[...ev.commentsList, ...ev.commentsList, ...ev.commentsList, ...ev.commentsList].map((c, j) => (
                    <div key={j} className="inline-flex flex-col w-[280px] sm:w-[350px] whitespace-normal bg-[#ebebe6] border border-black/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:border-[#3D5BF1]/40 hover:-translate-y-1 shadow-lg relative overflow-hidden">
                      <div className="absolute top-4 right-5 text-black/5 text-4xl font-serif select-none pointer-events-none">&ldquo;</div>
                      <p className="text-black/80 text-sm sm:text-base italic leading-relaxed mb-4 sm:mb-6 flex-1 pr-6 font-medium relative z-10">&ldquo;{c.text}&rdquo;</p>
                      <div className="flex justify-end mt-auto pt-3 border-t border-black/5">
                        <a href={c.linkedin || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 rounded-xl text-black/40 hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all text-[11px] font-bold uppercase tracking-widest">
                          <Linkedin size={14} /> View Link
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )} */}

          {/* Photo Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {(() => {
                const guestImages = ev.guests.map(g => g.img || '').filter(Boolean);
                const combinedGallery = Array.from(new Set([...guestImages, ...(ev.gallery || [])]));
                const displayImages = showMoreImages ? combinedGallery : combinedGallery.slice(0, 4);
                return displayImages.map((imgSrc, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[#5363B1]/25 group bg-[#0A1228]">
                    <img src={imgSrc} alt={`Season ${ev.edition} - Highlight ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ));
              })()}
            </div>
            {!showMoreImages && (
              <div className="absolute inset-0 flex items-end justify-center pb-4 sm:pb-6 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-[60%] sm:h-[80%] bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent pointer-events-none" />
                <button onClick={() => setShowMoreImages(true)} className="pointer-events-auto relative z-10 px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#3D5BF1] to-[#84ADFF] text-white text-xs sm:text-[14px] font-black border border-white/30 shadow-[0_15px_40px_rgba(61,91,241,0.5)] hover:scale-105 transition-all uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                  <span>Reveal All Memories</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
            {showMoreImages && (
              <div className="flex justify-center mt-5 sm:mt-6">
                <button onClick={() => setShowMoreImages(false)} className="px-7 sm:px-8 py-2.5 rounded-full text-white/50 text-[12px] sm:text-[13px] font-bold border border-white/10 hover:text-white hover:border-[#5363B1]/50 hover:bg-[#5363B1]/10 transition-all uppercase tracking-widest">
                  See Less
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
