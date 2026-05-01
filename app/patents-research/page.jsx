"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import {
  ArrowRight, Download, ShieldCheck,
  FileText, Calendar, Award, Globe, 
  Lightbulb, CheckCircle2, FlaskConical, LayoutGrid, ChevronRight, BookOpen,
  Search, Library, Users, Target
} from 'lucide-react';
import { PATENTS, RESEARCH, IMPACT_POINTS, TIMELINE_IP_RESEARCH } from '../lib/data';



export default function IntellectualPropertyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatents = PATENTS.filter(
    (patent) =>
      patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.technologies.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredResearch = RESEARCH.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.keywords.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fadeUp">
            <Lightbulb size={16} className="text-[#F59E0B]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Intellectual Property</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fadeUp">
            Patents & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Research.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Transforming academic insights into tangible innovation. My work spans from AI-driven patent frameworks to deep learning research in oncology and adaptive systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <span className="text-[#84ADFF]">📜</span> 6 Patents Filed
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <span className="text-[#10B981]">🧪</span> 10+ Research Publications
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center p-1 bg-white/5 rounded-2xl border border-white/10 w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-[#3D5BF1] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
              >
                All Assets
              </button>
              <button 
                onClick={() => setActiveTab('patents')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'patents' ? 'bg-[#3D5BF1] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
              >
                Patents
              </button>
              <button 
                onClick={() => setActiveTab('research')}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'research' ? 'bg-[#3D5BF1] text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
              >
                Research
              </button>
            </div>

            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
              <input 
                type="text" 
                placeholder="Search publications..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all text-white"
              />
            </div>
          </div>

          {/* Combined Sections */}
          {(activeTab === 'all' || activeTab === 'patents') && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <ShieldCheck className="text-[#3D5BF1]" />
                <h3 className="text-2xl font-black tracking-tight uppercase tracking-widest">Patent Portfolio</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[#3D5BF1]/30 to-transparent" />
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {filteredPatents.map((patent) => (
                  <div key={patent.id} className="bg-[#0D1635] rounded-[32px] p-8 border border-white/5 shadow-2xl group hover:border-white/10 transition-all">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-[#3D5BF1]/20 text-[#84ADFF] text-[10px] font-black uppercase tracking-widest">
                            {patent.status}
                          </span>
                          <span className="text-white/40 text-xs font-bold">{patent.year}</span>
                        </div>
                        <h4 className="text-2xl font-black mb-4 group-hover:text-[#84ADFF] transition-colors">{patent.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">{patent.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {patent.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-white/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-48 shrink-0 flex items-center">
                        <a href={patent.pdfUrl} className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#3D5BF1] hover:border-[#3D5BF1] transition-all">
                          <Download size={16} /> View IP
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'research') && (activeTab === 'all' ? <div className="h-px w-full bg-white/5 mb-24" /> : null)}

          {(activeTab === 'all' || activeTab === 'research') && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <BookOpen className="text-[#10B981]" />
                <h3 className="text-2xl font-black tracking-tight uppercase tracking-widest">Research Publications</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[#10B981]/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-8">
                {filteredResearch.map((paper) => (
                  <div key={paper.id} className="bg-[#0D1635] rounded-[32px] p-8 border border-white/5 shadow-2xl group hover:border-white/10 transition-all flex flex-col lg:flex-row gap-8">
                    {paper.img && (
                      <div className="lg:w-64 shrink-0 aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                        <img src={paper.img} alt={paper.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#6EE7B7] text-[10px] font-black uppercase tracking-widest">
                          {paper.journal}
                        </span>
                        <span className="text-white/40 text-xs font-bold">{paper.year}</span>
                      </div>
                      <h4 className="text-2xl font-black mb-4 group-hover:text-[#6EE7B7] transition-colors">{paper.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">{paper.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map(kw => (
                          <span key={kw} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-white/70">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-48 shrink-0 flex items-center">
                      <a href={paper.pdfUrl} className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#10B981] hover:border-[#10B981] transition-all">
                        <Download size={16} /> PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Combined Stats & Timeline */}
          <div className="grid lg:grid-cols-2 gap-8 mb-32">
            <div className="bg-[#0D1635] rounded-[40px] p-10 md:p-12 relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D5BF1]/10 to-transparent opacity-50" />
              <h3 className="text-3xl font-black tracking-tight mb-8 relative z-10 flex items-center gap-3">
                <FlaskConical className="text-[#3D5BF1]" /> Innovation Impact
              </h3>
              <ul className="flex flex-col gap-5 relative z-10">
                {IMPACT_POINTS.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 size={24} className="text-[#10B981] shrink-0" />
                    <span className="text-[17px] font-medium leading-tight text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#3D5BF1]/20 flex items-center justify-center mb-4 text-[#84ADFF]">
                  <FileText size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">6</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Patents</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 flex items-center justify-center mb-4 text-[#6EE7B7]">
                  <BookOpen size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">10+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Publications</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mb-4 text-[#FCD34D]">
                  <Globe size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">150+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Citations</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <Library size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">5+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Journals</div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <ContactSection />
    </main>
  );
}
