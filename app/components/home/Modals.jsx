"use client";

import React from 'react';
import { X, Linkedin, Globe, CheckCircle2, Target, Sparkles, CalendarDays, Building2, Zap, Phone, Mail, MapPin, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { HERO, NAV, CONTACT } from '../../lib/data';

// ──────────────────────────────
// GUEST DETAILS MODAL
// ──────────────────────────────
export function GuestModal({ guest, onClose }) {
  if (!guest) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-fadeIn" onClick={onClose} />
      <div className="relative bg-[#0A1228] rounded-[2rem] sm:rounded-[2.5rem] w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)] border border-[#5363B1]/30 animate-modalIn flex flex-col md:flex-row">
        <button onClick={onClose} className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white z-50 hover:scale-110">
          <X size={20} />
        </button>

        {/* Left Side */}
        <div className="md:w-[42%] p-6 sm:p-10 bg-gradient-to-br from-[#0D1635] via-[#0A1228] to-[#0D1635] border-b md:border-b-0 md:border-r border-[#5363B1]/20 flex flex-col items-center justify-center relative overflow-hidden shrink-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none opacity-40 blur-[100px]" style={{ background: 'radial-gradient(circle, #3D5BF1 0%, transparent 70%)' }} />
          <div className="relative w-48 sm:w-64 h-48 sm:h-64 mb-6 sm:mb-10">
            <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-[#5363B1]/20 shadow-[0_20px_60px_rgba(61,91,241,0.4)] z-20 relative">
              <img src={guest.img} alt={guest.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5">
                <div className="text-white font-black text-lg sm:text-xl tracking-tight leading-none">{guest.name?.split(' ')[0]}</div>
                <div className="text-[#84ADFF] text-[10px] sm:text-[11px] uppercase tracking-widest font-bold mt-1">Verified Speaker</div>
              </div>
            </div>
          </div>
          <div className="text-center z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#3D5BF1]/20 text-[#84ADFF] rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest border border-[#3D5BF1]/30 mb-4 sm:mb-6">
              <Globe size={11} /> Season {guest.season} Legacy
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <div className="text-[#84ADFF] font-black text-lg sm:text-xl mb-0.5">Top 1%</div>
                <div className="text-white/40 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Expert Panel</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <div className="text-[#84ADFF] font-black text-lg sm:text-xl mb-0.5">Global</div>
                <div className="text-white/40 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Network</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-[58%] p-6 sm:p-10 md:p-12 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-none">
          {/* Tag + Name + Desc */}
          <div className="mb-6 sm:mb-8">
            <span className="text-[#84ADFF] font-black text-[10px] uppercase tracking-[0.2em] bg-[#3D5BF1]/10 border border-[#3D5BF1]/20 px-3 py-1 rounded-full inline-block mb-3 max-w-full truncate" title={guest.tag || 'Industry Luminary'}>{guest.tag || 'Industry Luminary'}</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter leading-[0.9]">{guest.name}</h3>
            <p className="text-white/50 text-sm sm:text-base max-w-lg leading-relaxed">{guest.desc}</p>
          </div>

          {/* Posts about the event */}
          {guest.posts && guest.posts.length > 0 && (
            <div className="mb-6 sm:mb-8 pt-6 border-t border-white/5">
              <h4 className="flex items-center gap-2 text-[10px] text-[#84ADFF] font-black uppercase tracking-widest mb-4">
                What they shared about {HERO.name}
              </h4>
              <div className="flex flex-col gap-3">
                {guest.posts.map((postEntry, idx) => {
                  const url = typeof postEntry === 'string' ? postEntry : postEntry.url;
                  const isLinkedIn = url?.includes('linkedin.com');
                  const isYouTube = url?.includes('youtube.com') || url?.includes('youtu.be');
                  const isInsta = url?.includes('instagram.com');
                  const platform = isLinkedIn ? 'LinkedIn' : isYouTube ? 'YouTube' : isInsta ? 'Instagram' : 'Post';
                  const iconColor = isLinkedIn ? '#0A66C2' : isYouTube ? '#FF0000' : isInsta ? '#E1306C' : '#84ADFF';
                  const label = typeof postEntry === 'object' && postEntry.label ? postEntry.label : `View ${platform} Post`;
                  return (
                    <a key={idx} href={url} target="_blank" rel="noreferrer"
                      className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-[#3D5BF1]/10 hover:border-[#3D5BF1]/30 transition-all group">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: `${iconColor}22`, border: `1px solid ${iconColor}44` }}>
                        <Linkedin size={18} style={{ color: iconColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/80 text-sm font-semibold">{label}</div>
                        <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{platform}</div>
                      </div>
                      <ArrowRight size={15} className="text-white/20 group-hover:text-[#84ADFF] group-hover:translate-x-1 transition-all shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Session Comment (if any) */}
          {guest.sirComment && (
            <div className="mb-6 pt-6 border-t border-white/5">
              <h4 className="flex items-center gap-2 text-[10px] text-[#84ADFF] font-black uppercase tracking-widest mb-4">
                <MessageSquare size={13} /> In their words
              </h4>
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-[80px] text-white/5 leading-none font-serif select-none pointer-events-none">&ldquo;</div>
                <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed relative z-10 pl-2 italic">{guest.sirComment}</p>
              </div>
            </div>
          )}

          {/* Footer Buttons */}
          <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
            {guest.linkedin && (
              <a href={guest.linkedin} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[1.25rem] text-[14px] font-bold text-white transition-all hover:-translate-y-1 bg-gradient-to-r from-[#0A66C2] to-[#004182] flex-1">
                <Linkedin size={18} fill="currentColor" /> LinkedIn Profile
              </a>
            )}
            <button onClick={onClose} className="px-6 py-4 rounded-[1.25rem] text-[14px] font-bold text-white/40 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────
// EXPERIENCE DETAILS MODAL
// ──────────────────────────────
export function ExperienceModal({ exp, onClose }) {
  if (!exp) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-[#0A1228] rounded-[1.5rem] sm:rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-[#5363B1]/30 animate-modalIn flex flex-col">
        <button onClick={onClose} className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white z-50">
          <X size={18} />
        </button>

        <div className="p-5 sm:p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="inline-flex px-2.5 sm:px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-[#5363B1]/30 bg-[#0D1635] text-[#84ADFF] items-center gap-1.5 mb-2 sm:mb-3 w-fit">
            <CalendarDays size={11} className="opacity-80" /> {exp.period}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-4 sm:mb-6">{exp.role}</h3>

          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-bold text-white/40 uppercase tracking-widest mb-4 sm:mb-6">
            <Building2 size={15} className="text-[#3D5BF1]" /> {exp.org}
          </div>
          <div className="inline-flex items-center gap-2 bg-[#0D1635] border border-[#5363B1]/25 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 w-fit">
            <Zap size={13} className="text-[#84ADFF]" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/80">Key Impact &amp; Deliverables</span>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-3 sm:gap-4 text-[12px] sm:text-[13px] md:text-[14px] text-white/80 leading-relaxed animate-fadeIn" style={{ animationDelay: `${0.2 + j * 0.1}s` }}>
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3D5BF1]" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
            <button onClick={onClose} className="w-full bg-white text-[#0A1228] py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { InlineWidget } from "react-calendly";

// ──────────────────────────────
// SCHEDULE MEETING MODAL
// ──────────────────────────────
export function ScheduleModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#0A1228] border border-[#5363B1]/30 rounded-[1.5rem] sm:rounded-[2rem] w-full max-w-4xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] animate-modalIn flex flex-col">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white z-50">
          <X size={18} />
        </button>
        
        <div className="p-6 sm:p-10 flex flex-col items-center">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[#3D5BF1]/15 border border-[#3D5BF1]/25 flex items-center justify-center mb-4">
            <Calendar size={22} className="text-[#84ADFF]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">Book a Session</h2>
          <p className="text-white/50 text-sm mb-8 text-center max-w-md">Select a convenient time for our discovery call or technical consultation.</p>
          
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white relative">
            <InlineWidget 
              url="https://calendly.com/anand01ts/30min" 
              styles={{ height: '500px' }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '3D5BF1',
                textColor: '060D25'
              }}
            />
          </div>
        </div>

        <div className="p-6 border-t border-white/5 flex justify-center">
          <button onClick={onClose} className="px-8 py-3 rounded-full text-white/40 hover:text-white text-xs font-black uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all">
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────
// VIDEO PLAYER MODAL
// ──────────────────────────────
export function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-[80vh] sm:h-[85vh] max-h-[850px] bg-black rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-modalIn border border-[#5363B1]/25">
        <button onClick={onClose} className="absolute top-3 sm:top-4 right-3 sm:right-4 z-50 w-9 sm:w-10 h-9 sm:h-10 bg-black/60 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg">
          <X size={20} />
        </button>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&playsinline=1`} className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  );
}
