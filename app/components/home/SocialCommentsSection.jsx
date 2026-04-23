"use client";

import React, { useState } from 'react';
import { MessageSquare, Linkedin, ChevronDown } from 'lucide-react';
import { STUDENT_COMMENTS as SOCIAL_COMMENTS } from '../../lib/data';

export default function SocialCommentsSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 md:px-10 relative overflow-hidden" style={{ background: '#060D25' }}>
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#0D1635] border border-[#5363B1]/25 mb-4 sm:mb-6 text-[10px] font-bold tracking-widest text-white/60 uppercase">
            <MessageSquare size={11} className="text-white/60" /> Real Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-2 sm:mb-3 px-2" style={{ fontWeight: 300 }}>
            What People <span style={{ fontWeight: 700 }}>Are Saying</span>
          </h2>
          <p className="text-white/40 font-medium max-w-lg mx-auto text-sm sm:text-base px-4">
            Real LinkedIn posts from students, professionals & industry leaders about their experience.
          </p>
        </div>

        {/* Masonry Grid with Fade */}
        <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${showAll ? 'max-h-[9000px]' : 'max-h-[420px] sm:max-h-[500px]'}`}>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
            {SOCIAL_COMMENTS.map((c, i) => (
              <a
                key={i}
                href={c.linkedin}
                target="_blank"
                rel="noreferrer"
                className="break-inside-avoid block rounded-[1.25rem] sm:rounded-[1.6rem] border border-black/5 p-4 sm:p-6 hover:-translate-y-1 hover:border-[#5363B1]/40 hover:shadow-xl transition-all duration-300 group shadow-lg cursor-pointer"
                style={{ background: '#FFFFFF' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full"
                    style={{ background: '#0A66C215', color: '#0A66C2', border: '1px solid #0A66C230' }}>
                    LinkedIn Post
                  </span>
                  <Linkedin size={11} className="text-[#0A66C2] ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-600 text-[12px] sm:text-[13.5px] leading-relaxed italic">
                  &ldquo;{c.text}&rdquo;
                </p>
              </a>
            ))}
          </div>

          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 bg-gradient-to-t from-[#060D25] via-[#060D25]/90 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Button */}
        <div className={`flex justify-center transition-all duration-300 ${!showAll ? '-mt-12 sm:-mt-16 relative z-20' : 'mt-8 sm:mt-10'}`}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#5363B1]/40 bg-[#0D1635] text-white/90 text-[12px] sm:text-[13px] font-bold shadow-[0_0_20px_rgba(61,91,241,0.2)] hover:shadow-[0_0_30px_rgba(61,91,241,0.35)] hover:border-[#5363B1]/60 transition-all hover:-translate-y-1"
          >
            {showAll ? 'Show Less' : `See All ${SOCIAL_COMMENTS.length} Posts`}
            <ChevronDown size={15} className={`transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
