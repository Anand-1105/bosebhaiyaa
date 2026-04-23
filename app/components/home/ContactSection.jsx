"use client";

import React from 'react';
import { Mail, MapPin, Linkedin, Github, Youtube } from 'lucide-react';
import { CONTACT, NAV, SOCIAL_LINKS } from '../../lib/data';

const PLATFORM_ICONS = {
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  mail: Mail,
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10" style={{ background: '#060D25', borderTop: '1px solid rgba(83,99,177,0.15)' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 border border-[#5363B1]/25 bg-[#0D1635] animate-borderDance">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/60">Get In Touch</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4 sm:mb-6 leading-none text-white" style={{ fontWeight: 300 }}>
          {CONTACT.tagline} <span className="font-bold text-white/80">Something.</span>
        </h2>

        <p className="text-white/40 max-w-lg mx-auto mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed px-4">
          {CONTACT.subtitle} — open for conversations that create impact.
        </p>



        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 text-sm text-white/40">
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors text-xs sm:text-sm">
            <Mail size={14} /> <span className="break-all">{CONTACT.email}</span>
          </a>
          <span className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} /> {CONTACT.location}
          </span>
        </div>

        {/* Footer */}
        <div className="border-t pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 border-[#5363B1]/20">
          <div className="font-black text-white text-lg sm:text-xl order-1 sm:order-none">
            {NAV.brand} <span className="font-light text-white/30 italic">{NAV.brandSub}</span>
          </div>

          <div className="flex gap-2 sm:gap-3 order-2 sm:order-none">
            {SOCIAL_LINKS.map((s, i) => {
              const IconComp = PLATFORM_ICONS[s.platform] || Mail;
              return (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center border hover:scale-110 transition-all text-white/60 hover:text-white border-[#5363B1]/25 hover:border-[#5363B1]/50 bg-[#0D1635]">
                  <IconComp size={15} />
                </a>
              );
            })}
          </div>

          <p className="text-white/20 text-[10px] sm:text-xs order-3 sm:order-none">{CONTACT.copyright}</p>
        </div>
      </div>
    </section>
  );
}
