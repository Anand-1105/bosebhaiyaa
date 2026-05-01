"use client";

import React from 'react';
import Navbar from '../components/home/Navbar';
import SubNavbar from '../components/common/SubNavbar';
import ContactSection from '../components/home/ContactSection';
import { Star } from 'lucide-react';

export default function VideoTestimonialsPage() {
  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar />
      <SubNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Star size={16} className="text-[#84ADFF]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Community Voices</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fadeUp">
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Testimonials.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Hear directly from the people who have experienced the journey, shared their stories, and built the future alongside us.
          </p>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="pb-32 px-4 sm:px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col items-center gap-16 md:gap-24">
            {[
              "https://www.youtube.com/embed/-uI88jRZusY",
              "https://www.youtube.com/embed/PiyZZP7ze2Q",
              "https://www.youtube.com/embed/KKrEUig1JCM"
            ].map((src, i) => (
              <div key={i} className="relative group animate-fadeUp" style={{ animationDelay: `${i * 0.15}s` }}>
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-b from-[#3D5BF1]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                
                <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:border-[#3D5BF1]/30 transition-colors duration-500 bg-[#060D25]">
                  <iframe 
                    src={src} 
                    title={`Video Testimonial ${i + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
