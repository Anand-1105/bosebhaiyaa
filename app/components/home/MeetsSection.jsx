"use client";

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';
import { MEETS } from '../../lib/data';

const CATEGORY_COLORS = {
  'Government':    '#3D5BF1',
  'Tech Leader':   '#0D9488',
  'Media':         '#E11D48',
  'Business':      '#F59E0B',
  'Educator':      '#7C3AED',
  'Entertainment': '#F97316',
  'Academia':      '#0A66C2',
  'Entrepreneur':  '#10B981',
};

function MeetCard({ person, onClick }) {
  const [hovered, setHovered] = useState(false);
  const accent = CATEGORY_COLORS[person.category] || person.color;

  return (
    <div
      className="relative group cursor-pointer rounded-[1.75rem] overflow-hidden transition-all duration-500"
      style={{
        background: '#0D1635',
        border: `1px solid ${hovered ? accent + '50' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 20px 60px ${accent}25, 0 0 0 1px ${accent}25` : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(person)}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-52 md:h-56 lg:h-64 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-10"
          style={{ background: `linear-gradient(to bottom, transparent 30%, #0D1635 100%)` }} />
        <img
          src={person.photos[0]}
          alt={person.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = accent + '18'; }}
        />
        {/* Photo count badge */}
        {person.photos.length > 1 && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-bold backdrop-blur-md flex items-center gap-1"
            style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${accent}40`, color: accent }}>
            +{person.photos.length - 1} more
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 px-2 py-0.5 sm:py-1 rounded-full text-[7px] sm:text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
          style={{ background: `${accent}20`, border: `1px solid ${accent}40`, color: accent }}>
          {person.category}
        </div>
      </div>

      {/* Info */}
      <div className="relative z-10 px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-1">
        <div className="absolute top-0 left-3 right-3 sm:left-4 sm:right-4 md:left-5 md:right-5 h-[1px] opacity-40"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        <h3 className="text-white font-black text-xs sm:text-sm md:text-base lg:text-[17px] tracking-tight leading-tight mt-2 sm:mt-3 mb-0.5 sm:mb-1 group-hover:text-white transition-colors"
          style={{ textShadow: hovered ? `0 0 20px ${accent}50` : 'none' }}>
          {person.name}
        </h3>
        <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-0.5 sm:mb-1" style={{ color: accent }}>
          {person.org}
        </p>
        <p className="text-white/40 text-[9px] sm:text-[10px] md:text-[11px] leading-snug line-clamp-2">
          {person.role}
        </p>

        <div className="flex items-center gap-2 mt-2 sm:mt-2.5 md:mt-3 pt-2 sm:pt-2.5 md:pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] text-white/30 font-bold flex-1">Click to explore →</span>
        </div>
      </div>
    </div>
  );
}

function MeetModal({ person, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const accent = CATEGORY_COLORS[person.category] || person.color;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = 'unset'; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}>
      <div
        className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden animate-[zoomIn_0.3s_ease]"
        style={{ background: '#0A0F2A', border: `1px solid ${accent}30`, boxShadow: `0 40px 100px ${accent}20, 0 0 0 1px ${accent}15` }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all">
          <X size={18} />
        </button>

        {/* Image area */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-black/40 flex items-center justify-center">
          <div className="absolute inset-0 z-10"
            style={{ background: `linear-gradient(to bottom, transparent 40%, #0A0F2A 100%)` }} />
          <img
            src={person.photos[photoIdx]}
            alt={person.name}
            className="w-full h-full object-contain transition-all duration-500"
            onError={e => { e.target.style.display = 'none'; }}
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
            style={{ background: `${accent}20`, border: `1px solid ${accent}40`, color: accent }}>
            {person.category}
          </div>

          {/* Nav arrows */}
          {person.photos.length > 1 && (
            <>
              <button
                onClick={() => setPhotoIdx(p => Math.max(0, p - 1))}
                disabled={photoIdx === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white border border-white/20 hover:bg-black/80 disabled:opacity-20 transition-all backdrop-blur">
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setPhotoIdx(p => Math.min(person.photos.length - 1, p + 1))}
                disabled={photoIdx === person.photos.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white border border-white/20 hover:bg-black/80 disabled:opacity-20 transition-all backdrop-blur">
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 pb-8 pt-2 relative z-10">
          <div className="absolute top-0 left-6 right-6 h-[1px]"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}80, transparent)` }} />

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter mt-4 mb-1"
            style={{ textShadow: `0 0 40px ${accent}40` }}>
            {person.name}
          </h2>
          <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: accent }}>
            {person.org}
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-5">{person.role}</p>

          {/* Thumbnail strip */}
          {person.photos.length > 1 && (
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
              {person.photos.map((photo, idx) => (
                <button key={idx} onClick={() => setPhotoIdx(idx)}
                  className={`shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${photoIdx === idx ? 'scale-110' : 'opacity-50 hover:opacity-80'}`}
                  style={{ borderColor: photoIdx === idx ? accent : 'transparent' }}>
                  <img src={photo} className="w-full h-full object-cover" alt={`Photo ${idx + 1}`}
                    onError={e => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-white/20 text-[11px]">
              {person.photos.length} photo{person.photos.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MeetsSection() {
  const [activePerson, setActivePerson] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(CATEGORY_COLORS)];
  const filteredMeets = activeCategory === 'All' 
    ? MEETS 
    : MEETS.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="meets" className="w-full pt-20 sm:pt-32 pb-0 px-4 sm:px-6 md:px-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D25 0%, #080E28 40%, #060D25 100%)' }}>

        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, #84ADFF, transparent)' }} />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
        <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(132,173,255,0.06) 0%, transparent 65%)' }} />
        <div className="absolute bottom-[-5%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(61,91,241,0.06) 0%, transparent 65%)' }} />

        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeUp">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4 md:mb-5 text-[9px] sm:text-[10px] font-bold tracking-widest text-white/40 uppercase">
              <Star size={10} className="text-[#84ADFF]" fill="#84ADFF" /> Notable Encounters
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-white tracking-tighter leading-[1.0] mb-3 sm:mb-4 md:mb-4 px-2">
              People I&apos;ve Had the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">
                Privilege of working
              </span>
            </h2>
            <p className="text-white/35 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2">
              From IAS officers to Bollywood icons, tech visionaries to educators — every encounter has been a masterclass.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 px-2">
              {categories.map((cat) => {
                const color = CATEGORY_COLORS[cat] || '#84ADFF';
                const isActive = activeCategory === cat;
                return (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[8px] sm:text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300"
                    style={{ 
                      background: isActive ? color : `${color}12`, 
                      border: `1px solid ${isActive ? 'white' : color + '40'}`, 
                      color: isActive ? 'white' : color,
                      boxShadow: isActive ? `0 10px 20px ${color}40` : 'none',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 min-h-[400px]">
            {filteredMeets.map((person, i) => (
              <div key={person.name} className="animate-fadeUp"
                style={{ animationDelay: `${i * 0.03}s`, animationFillMode: 'both' }}>
                <MeetCard person={person} onClick={setActivePerson} />
              </div>
            ))}
          </div>

          {/* Footer stat */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(132,173,255,0.06)', border: '1px solid rgba(132,173,255,0.12)' }}>
              <Users size={16} className="text-[#84ADFF]" />
              <span className="text-white/50 text-sm font-bold">{MEETS.length} Notable Meets & Counting</span>
            </div>
          </div>
        </div>
      </section>

      {activePerson && (
        <MeetModal person={activePerson} onClose={() => setActivePerson(null)} />
      )}
    </>
  );
}
