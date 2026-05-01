"use client";

import React from 'react';
import { User, MapPin, Linkedin, Youtube, Mic, ArrowRight, GraduationCap, BookOpen, Globe, Rocket, Sparkles, Building2 } from 'lucide-react';
import { HERO, STATS, CONTACT, ABOUT_IMAGES, ABOUT_HIGHLIGHTS, ABOUT_ROLES, ABOUT_EDUCATION, ABOUT_QUICK_FACT } from '../../lib/data';

// Map icon key strings to actual Lucide components
const ICON_MAP = {
  graduation: GraduationCap,
  brain: Globe,
  building: Building2,
  rocket: Rocket,
  globe: Globe,
  sparkles: Sparkles,
  mic: Mic,
  star: Sparkles,
  book: BookOpen,
};

const STAT_ICONS = [GraduationCap, BookOpen, GraduationCap, Rocket];
const STAT_COLORS = ['#4361EE', '#7C3AED', '#10B981', '#F59E0B'];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      {/* Sleek abstract shapes for elegant background */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(61,91,241,0.11) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(65,121,234,0.08) 0%, transparent 65%)' }} />
      <div className="absolute top-1/3 left-1/4 w-[2px] h-[60%] bg-gradient-to-b from-[#3D5BF1]/0 via-[#3D5BF1]/15 to-transparent blur-sm rotate-[15deg] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10 pt-6 sm:pt-12 pb-12 sm:pb-20">

        {/* Section label */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-6 mb-12 sm:mb-20 animate-fadeUp">
          <div className="section-badge"><User size={12} /> About Me</div>
          <span className="h-px w-full sm:flex-1" style={{ background: 'linear-gradient(to right, rgba(61,91,241,0.3), transparent)' }} />
        </div>

        {/* Improved 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 sm:gap-14 lg:gap-20 items-start">

          {/* LEFT: Bio & Highlights */}
          <div className="animate-fadeUp flex flex-col h-full" style={{ animationFillMode: 'both', animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-[#3D5BF1]/10 border border-[#3D5BF1]/20 text-[#84ADFF] font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              The Journey
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1] font-light">
              {HERO.tagline} <span className="font-extrabold blue-grad-text">{HERO.taglineHighlight}</span>
            </h2>

            <div className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 space-y-4">
              <p>
                I&apos;m <span className="font-bold text-white/90">{HERO.name}</span> — Assistant Professor. I bridge academia &amp; industry through modern education, hands-on product building, and massive impact events.
              </p>
              <p>
                Having founded Techfluence and built platforms reaching <span className="font-bold text-[#84ADFF]">100K+ people</span> globally, I focus on shaping the next generation of builders, founders, and innovators.
              </p>
            </div>

            {/* Premium Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {ABOUT_HIGHLIGHTS.map((b, i) => {
                const IconComp = ICON_MAP[b.icon] || Globe;
                return (
                  <div key={i} className="group relative overflow-hidden rounded-2xl glass-card border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-5 hover:border-[#3D5BF1]/30 transition-all duration-300 animate-fadeUp" style={{ animationDelay: `${0.15 + i * 0.08}s`, animationFillMode: 'both' }}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" style={{ backgroundColor: b.color + '20' }} />
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform border" style={{ background: b.color + '15', borderColor: b.color + '30' }}>
                        <IconComp size={18} style={{ color: b.color }} />
                      </div>
                      <p className="text-white/80 text-sm font-medium leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Fact Bottom Callout */}
            <div className="mt-auto bg-gradient-to-r from-[#0D1635] to-[#14214D] border border-[#5363B1]/20 rounded-2xl p-5 flex items-center gap-4 shadow-[0_10px_30px_-15px_rgba(61,91,241,0.5)]">
              <div className="w-12 h-12 rounded-full bg-[#3D5BF1]/20 flex items-center justify-center text-[#84ADFF]">
                <Mic size={20} />
              </div>
              <div>
                <div className="font-black text-white text-sm sm:text-base">{ABOUT_QUICK_FACT.label}</div>
                <div className="text-[#84ADFF] text-xs font-semibold uppercase tracking-widest">{ABOUT_QUICK_FACT.sublabel}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Stats + Roles + Education */}
          <div className="flex flex-col gap-6 sm:gap-8 animate-slideRight w-full" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>

            {/* Impact Stats Grid - Re-imagined */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => {
                const IconComp = STAT_ICONS[i] || Rocket;
                return (
                  <div key={s.label} className="relative overflow-hidden rounded-[1.5rem] p-6 hover:-translate-y-1 transition-transform duration-500 group animate-fadeUp border border-[#5363B1]/20" style={{ background: 'linear-gradient(145deg, #0A1228 0%, #060D25 100%)', animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'both' }}>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-[20px] transition-transform duration-500 group-hover:scale-150" style={{ background: STAT_COLORS[i] + '30' }} />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <div className="p-2.5 rounded-xl border" style={{ background: STAT_COLORS[i] + '15', borderColor: STAT_COLORS[i] + '30' }}>
                        <IconComp size={16} style={{ color: STAT_COLORS[i] }} />
                      </div>
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-1">{s.value}</div>
                        <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">{s.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional Hats Container */}
            <div className="glass-card rounded-[1.5rem] p-6 sm:p-8 backdrop-blur-md bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-5">
                <Rocket size={16} className="text-[#84ADFF]" />
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#84ADFF]">Ecosystem Footprint</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_ROLES.map(tag => (
                  <span key={tag} className="bg-[#0A1228] border border-white/5 hover:border-[#84ADFF]/30 text-white/70 text-xs font-medium px-4 py-2 rounded-full hover:text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all cursor-default shadow-sm">{tag}</span>
                ))}
              </div>
            </div>

            {/* Academic Pedigree Container */}
            <div className="glass-card rounded-[1.5rem] p-6 sm:p-8 backdrop-blur-md bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={16} className="text-[#84ADFF]" />
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#84ADFF]">Academic Frame</p>
              </div>
              <div className="space-y-5">
                {ABOUT_EDUCATION.map((ed, i) => {
                  const IconComp = ICON_MAP[ed.icon] || GraduationCap;
                  return (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 border group-hover:bg-[#3D5BF1]/10 transition-colors" style={{ background: ed.color + '10', borderColor: ed.color + '20' }}>
                        <IconComp size={18} style={{ color: ed.color }} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="font-bold text-white/90 text-sm sm:text-base group-hover:text-white transition-colors">{ed.degree}</div>
                        <div className="text-[#84ADFF]/60 font-medium tracking-wide text-xs mt-0.5">{ed.school}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Connector */}
            <a href="https://www.linkedin.com/in/souhardya-bose/" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white p-5 rounded-[1.5rem] hover:-translate-y-1 transition-all shadow-[0_15px_30px_rgba(10,102,194,0.3)] group">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div className="font-bold text-sm tracking-wide">Connect on LinkedIn</div>
              </div>
              <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
