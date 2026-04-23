"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Send, CalendarDays, User, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { NAV } from '../../lib/data';

export default function Navbar({ onScheduleMeeting }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const NavLinks = ({ className = '', onClick }) => (
    <>
      {NAV.links.map((link) => (
        link.href.startsWith('/') ? (
          <Link key={link.label} href={link.href} onClick={onClick} className={className}>
            {link.label}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
          </Link>
        ) : (
          <a key={link.label} href={link.href} onClick={onClick} className={className}>
            {link.label}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
          </a>
        )
      ))}
    </>
  );

  return (
    <>
      {/* ── Normal Navbar (Initial State) ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Link href="/" className="font-bold tracking-tighter text-xl sm:text-2xl flex flex-col leading-none group/logo">
          <span className="text-white group-hover/logo:text-[#84ADFF] transition-colors">{NAV.brand}</span>
          <span className="font-serif italic text-xs sm:text-sm text-white/60 group-hover/logo:text-white/40 transition-colors">{NAV.brandSub}</span>
        </Link>

        <div className="hidden lg:flex gap-5 xl:gap-6 text-[13px] font-medium text-white/80">
          {NAV.links.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors relative group">
                {link.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors relative group">
                {link.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={onScheduleMeeting} className="px-5 xl:px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all text-white" style={{ background: 'linear-gradient(180deg,#3D5BF1,#4179EA,#84ADFF)', boxShadow: '0 0 24px rgba(61,91,241,0.45)' }}>
            {NAV.ctaLabel}
          </button>
        </div>

        <button className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Floating Navbar & CTA (Scrolled State) ── */}
      <div className={`fixed top-4 sm:top-6 inset-x-0 z-[100] flex justify-center items-center gap-4 px-3 sm:px-4 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <nav className={`rounded-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-[#5363B1]/25 w-fit backdrop-blur-2xl transition-all ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ background: 'rgba(6,13,37,0.85)' }}>
          <Link href="/" className="font-bold tracking-tighter text-lg sm:text-xl flex flex-col leading-none pl-2 sm:pl-4 pr-4 sm:pr-6 group/logo">
            <span className="text-white group-hover/logo:text-[#84ADFF] transition-colors">{NAV.brand}</span>
            <span className="font-serif italic text-[10px] sm:text-[11px] text-[#EAEAE5]/60 group-hover/logo:text-[#EAEAE5]/40 transition-colors">{NAV.brandSub}</span>
          </Link>

          <div className="hidden lg:flex gap-5 xl:gap-6 text-[13px] font-medium text-[#EAEAE5]/80 pr-4 sm:pr-6 border-r border-white/10 mr-2 sm:mr-4">
            {NAV.links.map((link) => (
              link.href.startsWith('/') ? (
                <Link key={link.label} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ) : (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
              )
            ))}
          </div>

          <button className="lg:hidden p-2 text-[#EAEAE5] hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </nav>

        {/* ── Separate Floating CTA ── */}
        <div className={`hidden lg:flex transition-all duration-500 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <button onClick={onScheduleMeeting} className="px-6 xl:px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all text-white shadow-[0_15px_30px_rgba(61,91,241,0.4)]" style={{ background: 'linear-gradient(135deg,#3D5BF1,#84ADFF)' }}>
            {NAV.ctaLabel}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`fixed inset-0 bg-[#EAEAE5] z-[105] flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-5 right-5 p-2 text-[#1A1A1A] bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 sm:gap-8 text-center text-2xl sm:text-3xl font-black tracking-tight text-[#1A1A1A] w-full px-8">
          {NAV.links.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4361EE] hover:translate-x-2 transition-all">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4361EE] hover:translate-x-2 transition-all">
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-10 w-full px-8">
          <button onClick={() => { setIsMobileMenuOpen(false); onScheduleMeeting(); }} className="w-full py-4 rounded-2xl font-bold text-white text-base" style={{ background: 'linear-gradient(135deg,#3D5BF1,#84ADFF)' }}>
            {NAV.ctaLabel}
          </button>
        </div>
      </div>
    </>
  );
}
