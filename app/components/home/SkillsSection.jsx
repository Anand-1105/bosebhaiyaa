"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Code2, Target, Cpu, Sparkles, Terminal, Globe, Database, Cloud, Brain, Layers, BarChart2, Search, FlaskConical, Wrench, MessageSquare, Bot, GitBranch, PenTool, Layout, RefreshCw, TestTube } from 'lucide-react';
import { SKILLS_TECH, SKILLS_PM, SKILLS_TOOLS } from '../../lib/data';

// Map each skill name to a proper Lucide icon + color
const SKILL_ICON_MAP = {
  // Tech
  'Python': { icon: Terminal, color: '#3B82F6' },
  'JavaScript': { icon: Code2, color: '#F59E0B' },
  'React.js': { icon: Globe, color: '#38BDF8' },
  'Node.js': { icon: Layers, color: '#4ADE80' },
  'TensorFlow': { icon: Brain, color: '#F97316' },
  'FastAPI': { icon: Cpu, color: '#A78BFA' },
  'AWS': { icon: Cloud, color: '#FB923C' },
  'PostgreSQL': { icon: Database, color: '#60A5FA' },
  'Google Cloud': { icon: Cloud, color: '#34A853' },
  // PM
  'Product Roadmaps': { icon: Layers, color: '#A78BFA' },
  'Agile / Scrum': { icon: RefreshCw, color: '#38BDF8' },
  'User Research': { icon: Search, color: '#F59E0B' },
  'A/B Testing': { icon: BarChart2, color: '#4ADE80' },
  'Prompt Engineering': { icon: Bot, color: '#A78BFA' },
  // Tools
  'Figma': { icon: PenTool, color: '#F87171' },
  'Jira': { icon: Layout, color: '#60A5FA' },
  'Postman': { icon: MessageSquare, color: '#FB923C' },
  'ChatGPT': { icon: Bot, color: '#4ADE80' },
};

const SKILL_CATEGORIES = [
  {
    title: 'Languages & Frameworks',
    subtitle: 'Foundation of every build',
    iconKey: 'code',
    skills: SKILLS_TECH,
    accent: '#4361EE',
    accentSoft: 'rgba(67,97,238,0.1)',
    accentBorder: 'rgba(67,97,238,0.28)',
    number: '01',
    HeaderIcon: Terminal,
  },
  {
    title: 'Product Management',
    subtitle: 'Strategy meets execution',
    iconKey: 'target',
    skills: SKILLS_PM,
    accent: '#7C3AED',
    accentSoft: 'rgba(124,58,237,0.1)',
    accentBorder: 'rgba(124,58,237,0.28)',
    number: '02',
    HeaderIcon: Target,
  },
  {
    title: 'Tools & Platforms',
    subtitle: 'The modern builder\'s toolkit',
    iconKey: 'cpu',
    skills: SKILLS_TOOLS,
    accent: '#0D9488',
    accentSoft: 'rgba(13,148,136,0.1)',
    accentBorder: 'rgba(13,148,136,0.28)',
    number: '03',
    HeaderIcon: Wrench,
  },
];

function SkillPill({ skill, accent }) {
  const mapped = SKILL_ICON_MAP[skill.name];
  const IconComp = mapped?.icon || Code2;
  const iconColor = mapped?.color || accent;

  return (
    <span
      className="group/pill flex items-center gap-2 text-[11px] sm:text-xs font-semibold px-3 py-2 rounded-xl border cursor-default select-none"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.07)',
        color: 'rgba(255,255,255,0.7)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = iconColor + '18';
        e.currentTarget.style.borderColor = iconColor + '55';
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 6px 20px -4px ${iconColor}40`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <IconComp size={13} style={{ color: iconColor, flexShrink: 0 }} />
      {skill.name}
    </span>
  );
}

function SkillCard({ cat, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { HeaderIcon } = cat;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #0D1635 0%, #080F28 100%)',
        border: `1px solid ${cat.accentBorder}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, box-shadow 0.3s ease`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 24px 60px -12px ${cat.accent}35`;
        e.currentTarget.style.borderColor = cat.accent + '55';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = cat.accentBorder;
      }}
    >
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${cat.accent}80, transparent)` }} />

      {/* Ambient orb */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${cat.accent}14 0%, transparent 70%)` }} />

      {/* Card header */}
      <div className="relative p-5 sm:p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          {/* Icon badge */}
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: cat.accentSoft, border: `1px solid ${cat.accentBorder}` }}
          >
            <HeaderIcon size={20} style={{ color: cat.accent }} />
          </div>
          {/* Faded number */}
          <span
            className="font-black select-none leading-none"
            style={{ fontSize: 'clamp(36px,6vw,52px)', color: cat.accent, opacity: 0.1 }}
          >
            {cat.number}
          </span>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: cat.accent }}>{cat.subtitle}</p>
        <h3 className="text-base sm:text-lg font-black text-white leading-snug">{cat.title}</h3>
      </div>

      {/* Divider */}
      <div className="mx-5 sm:mx-6 mb-4" style={{ height: '1px', background: `linear-gradient(to right, ${cat.accent}40, transparent)` }} />

      {/* Pills */}
      <div className="px-5 sm:px-6 flex flex-wrap gap-2 flex-1">
        {cat.skills.map((s, j) => (
          <SkillPill key={j} skill={s} accent={cat.accent} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 sm:px-6 pt-4 pb-5 flex items-center justify-between mt-2">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.18)' }}>
          {cat.skills.length} skills
        </span>
        <div className="flex items-center gap-1">
          {cat.skills.map((_, k) => (
            <div
              key={k}
              className="rounded-full transition-all duration-300"
              style={{
                width: k === 0 ? '16px' : '4px',
                height: '4px',
                background: cat.accent,
                opacity: k === 0 ? 0.9 : 0.2 + (k / cat.skills.length) * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setHeadingVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative w-full pt-20 sm:pt-32 pb-0 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: '#060D25' }}
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(67,97,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(67,97,238,0.025) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(67,97,238,0.055) 0%, transparent 65%)', transform: 'translate(-50%,-45%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 65%)', transform: 'translate(40%,40%)' }} />

      <div className="relative max-w-[1200px] mx-auto">

        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-12 sm:mb-20 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="shrink-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
              style={{ background: 'rgba(67,97,238,0.1)', border: '1px solid rgba(67,97,238,0.25)' }}
            >

              <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: '#84ADFF' }}>Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Skills &amp;<br />
              <span style={{ background: 'linear-gradient(100deg, #4361EE 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Tech Stack
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
            From writing scalable code to shipping products people love — a full spectrum of capabilities across engineering, product, and tooling.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={i} cat={cat} index={i} />
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 sm:mt-16 flex flex-wrap items-center gap-6 sm:gap-10"
          style={{ opacity: headingVisible ? 1 : 0, transition: 'opacity 0.7s ease 0.6s' }}
        >
          {[
            { value: '9+', label: 'Languages & Frameworks', color: '#4361EE' },
            { value: '5+', label: 'PM Methodologies', color: '#7C3AED' },
            { value: '4+', label: 'Tools & Platforms', color: '#0D9488' },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="hidden sm:block w-px h-10" style={{ background: 'rgba(255,255,255,0.07)' }} />}
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl sm:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
