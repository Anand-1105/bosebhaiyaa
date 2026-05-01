"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Image, Mic, PlayCircle, Grid } from 'lucide-react';

export default function SubNavbar() {
  const pathname = usePathname();

  const links = [
    { label: 'Gallery', href: '/gallery', icon: <Image size={14} /> },
    { label: 'Podcasts & Talks', href: '/podcasts', icon: <Mic size={14} /> },
    { label: 'Video Testimonials', href: '/video-testimonials', icon: <PlayCircle size={14} /> },
  ];

  return (
    <div className="fixed top-24 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[28px] p-1.5 flex items-center gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-[22px] transition-all group relative overflow-hidden ${
                isActive 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                isActive ? 'bg-[#3D5BF1]/20 text-[#84ADFF] shadow-[0_0_15px_rgba(61,91,241,0.3)]' : 'text-white/40'
              }`}>
                {link.icon}
              </div>
              <span className="text-[11px] font-bold tracking-tight uppercase">{link.label}</span>
              {isActive && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#84ADFF] shadow-[0_0_8px_#84ADFF]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
