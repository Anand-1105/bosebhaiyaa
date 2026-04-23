"use client";

import React from 'react';
import { Linkedin, Sparkles } from 'lucide-react';

export default function LinkedInFeedSection() {
  return (
    <section className="w-full pt-4 sm:pt-8 pb-20 sm:pb-32 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3D5BF1]/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <Linkedin size={14} className="text-[#0A66C2]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Activity & Thoughts</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
            LinkedIn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Insights.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Direct updates, industry perspectives, and professional milestones shared with the community.
          </p>
        </div>

        {/* Feed Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {[
            { id: "7430643517196075009", type: 'linkedin' }, // Kishan Nath
            { id: "7420896448826994688", type: 'linkedin' }, // Ashish Singh
            { id: "7432420566969593856", type: 'linkedin' }, // Hitesh Tomar
            { id: "7237895245139435521", type: 'linkedin' }, // Deeksha
            { id: "7236826664742109184", type: 'linkedin' }, // Kundan Kumar Sharma
            { id: "7237125710148952064", type: 'linkedin' }, // Md Abdullah Ibne Hayan
            { id: "7158806709040279552", type: 'linkedin' }, // Rocky Bhatia
            { id: "7159387539965906945", type: 'linkedin' }, // scselpu
            { id: "C2hNvi0Pde7", type: 'instagram' },        // LPU Instagram
            { id: "C_hnnOSPkC_", type: 'instagram' },       // CSE LPU Instagram
            { id: "7309098151896879104", type: 'linkedin' }, // Rajya Vardhan
            { id: "7306666178616115200", type: 'linkedin' }  // Ajay Suneja
          ].map((item) => (
            <div key={item.id} className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3D5BF1]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0D1635]/80 backdrop-blur-xl p-3 sm:p-4 shadow-2xl transition-all duration-500 hover:border-[#3D5BF1]/40 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4 px-4 py-2 border-b border-white/5">
                  <div className={`w-2 h-2 rounded-full ${item.type === 'linkedin' ? 'bg-[#0A66C2]' : 'bg-[#E1306C]'} animate-pulse`} />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Live {item.type === 'linkedin' ? 'LinkedIn' : 'Instagram'} Feed
                  </span>
                  <Sparkles size={12} className="ml-auto text-[#84ADFF] opacity-50" />
                </div>
                <div className="w-full overflow-hidden rounded-2xl bg-white/5">
                   <iframe 
                     src={item.type === 'linkedin' 
                       ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${item.id}`
                       : `https://www.instagram.com/p/${item.id}/embed/`
                     }
                     height="500" 
                     width="100%" 
                     frameBorder="0" 
                     allowFullScreen="" 
                     title="Embedded post"
                     className="w-full h-[400px] sm:h-[500px]"
                   ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
