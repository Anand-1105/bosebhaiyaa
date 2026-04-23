"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import { Star, Quote, MessageSquare, Linkedin, ChevronDown, User } from 'lucide-react';
import { STUDENT_COMMENTS, TESTIMONIALS } from '../lib/data';

export default function TestimonialsPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Linkedin size={16} className="text-[#0A66C2]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Student Mentorship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Feedback.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real feedback and growth stories from students who have been part of my mentorship sessions, Techfluence, and classroom initiatives.
          </p>
        </div>
      </section>

      {/* Social Feedback Grid (The screenshot section) */}
      <section className="pb-24 px-4 sm:px-6 md:px-10 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#84ADFF]">Linkedln Student Feed</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className={`relative transition-[max-height] duration-1000 ease-in-out overflow-hidden ${showAll ? 'max-h-[9000px]' : 'max-h-[1200px]'}`}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {STUDENT_COMMENTS.map((c, i) => (
                <a
                  key={i}
                  href={c.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="break-inside-avoid block rounded-3xl border border-white/5 p-8 hover:-translate-y-1 hover:border-[#0A66C2]/40 hover:shadow-2xl transition-all duration-300 group shadow-lg cursor-pointer"
                  style={{ background: '#FFFFFF' }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      {c.avatar ? (
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0A66C2]/10 group-hover:border-[#0A66C2]/30 transition-all">
                          <img
                            src={c.avatar}
                            alt="Contributor"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:[--hover-zoom:1.1]"
                            style={{
                              '--zoom': c.zoom || 1.5,
                              transform: `scale(calc(var(--zoom) * var(--hover-zoom, 1))) translateY(${c.offsetY || '0%'})`,
                              objectPosition: c.position || 'center'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-[#0A66C2]/5 flex items-center justify-center border-2 border-[#0A66C2]/10 group-hover:border-[#0A66C2]/30 transition-colors">
                          <User size={24} className="text-[#0A66C2]/20" />
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 border border-[#0A66C2]/10 shadow-sm group-hover:scale-110 transition-transform">
                        <Linkedin size={12} className="text-[#0A66C2]" />
                      </div>
                    </div>

                    <div className="flex-1 py-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                          style={{ background: '#0A66C210', color: '#0A66C2', border: '1px solid #0A66C220' }}>
                          Linkedln Verified
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Student Endorsement</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    &ldquo;{c.text}&rdquo;
                  </p>
                </a>
              ))}
            </div>

            {!showAll && (
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#060D25] via-[#060D25]/90 to-transparent pointer-events-none" />
            )}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 bg-[#0D1635] text-white text-[13px] font-black uppercase tracking-widest shadow-2xl hover:bg-white/5 transition-all"
            >
              {showAll ? 'Show Less' : `See All ${STUDENT_COMMENTS.length} Feedbacks`}
              <ChevronDown size={18} className={`transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Wall of Love (Additional testimonials) */}
      {TESTIMONIALS.length > 0 && (
        <section className="pb-32 px-4 sm:px-6 md:px-10 border-t border-white/5 pt-32">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="relative rounded-[32px] p-10 border border-white/5 bg-[#0D1635] hover:border-[#3D5BF1]/20 transition-all group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <Quote size={120} />
                  </div>

                  <div className="flex items-center gap-1.5 mb-8 relative z-10">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-10 relative z-10 italic">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="flex items-center gap-4 relative z-10">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#3D5BF1]/50 transition-colors"
                    />
                    <div>
                      <div className="text-white font-black text-base">{t.name}</div>
                      <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </main>
  );
}
