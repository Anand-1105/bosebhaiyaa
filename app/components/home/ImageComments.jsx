"use client";

import React, { useState } from 'react';
import ImageLightbox from '../common/ImageLightbox';
import { LINKEDIN_TESTIMONIALS } from '../../lib/data';
import { Linkedin } from 'lucide-react';

export default function ImageComments() {
  const items = Array.isArray(LINKEDIN_TESTIMONIALS) ? LINKEDIN_TESTIMONIALS : [];
  const images = items.map((it) => it.img);
  const [expanded, setExpanded] = useState(false);

  const visibleCount = expanded ? items.length : Math.min(8, items.length);
  const visible = items.slice(0, visibleCount);

  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 overflow-hidden relative" style={{ background: '#060D25' }}>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-badge mb-4 sm:mb-6 mx-auto">LinkedIn · Student Comments</div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">Student Image Comments</h3>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base px-4">Click any image to enlarge — LinkedIn post links open separately.</p>
        </div>

        <div className="relative">
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 transition-all ${!expanded ? 'max-h-[480px] overflow-hidden' : ''}`}>
            {visible.map((it, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden border border-[#5363B1]/25 bg-[#0A1228]">
                <ImageLightbox images={images} index={i} alt={`LinkedIn comment ${i + 1}`}>
                  <img src={it.img} alt={`LinkedIn comment ${i + 1}`} className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform" />
                </ImageLightbox>

                {it.link && (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2 right-2 z-20 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-[#0A66C2] transition-colors"
                    title="Open LinkedIn post"
                  >
                    <Linkedin size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {!expanded && items.length > visibleCount && (
            <>
              <div className="absolute left-0 right-0 bottom-0 h-28 bg-gradient-to-t from-[#060D25] to-transparent pointer-events-none" />
              <div className="absolute left-0 right-0 bottom-4 flex justify-center pointer-events-auto">
                <button
                  onClick={() => setExpanded(true)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#3D5BF1] to-[#84ADFF] text-white font-bold shadow-lg"
                >
                  See more
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}