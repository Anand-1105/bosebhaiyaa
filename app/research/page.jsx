"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import { 
  ArrowRight, Download, Search, 
  BookOpen, Calendar, Globe, Users, Target, 
  Lightbulb, CheckCircle2, FlaskConical, LayoutGrid, ChevronRight, Library
} from 'lucide-react';

const researchData = [
  {
    id: 'paper-1',
    title: 'Gastrointestinal Cancer Detection Using Deep Learning: A Comprehensive Implementation and Strategy',
    journal: 'ICNGC-2025',
    year: '2025',
    status: 'Published',
    type: 'Journal Article',
    description: 'A robust deep learning framework for the early detection and classification of gastrointestinal cancers, integrating advanced neural architectures for high-precision diagnostic support.',
    keywords: ['Deep Learning', 'Oncology', 'Medical Imaging', 'Strategy'],
    authors: ['Prof. Souhardya Bose', 'Research Team'],
    pdfUrl: 'https://drive.google.com/file/d/1335hLywRki06npkmj1ChAp-xafuUFBbQ/view',
    color: '#3D5BF1',
    img: '/img/gallery/8.jpeg'
  },
  {
    id: 'paper-2',
    title: 'Adaptive Learning Systems: Predictive Modeling with Electric Vehicle Chassis Material Selection using Machine learning',
    journal: '(ICNGC-2025)',
    year: '2025',
    status: 'Published',
    type: 'Conference Proceeding',
    description: 'Exploring the intersection of educational adaptive systems and material science, utilizing predictive modeling to optimize chassis material selection for high-performance electric vehicles.',
    keywords: ['Machine Learning', 'Electric Vehicles', 'Predictive Modeling', 'Adaptive Systems'],
    authors: ['Prof. Souhardya Bose', 'Research Team'],
    pdfUrl: 'https://drive.google.com/file/d/1-1DRAcqVJR5TKQvmC4UdupjMmCdtk-yA/view',
    color: '#10B981',
    img: '/img/gallery/13.jpeg'
  }
];

const impactPoints = [
  "Advancing pedagogical frameworks through AI integration",
  "Developing data-driven solutions for student retention",
  "Creating practical frameworks for modern Product Management",
  "Bridging the gap between academic theory and industry practice"
];

const timelineData = [
  { year: '2025', title: 'Deep Learning in Oncology', desc: 'Published high-precision framework for Gastrointestinal Cancer detection at ICNGC.' },
  { year: '2024', title: 'EV Adaptive Systems', desc: 'Developed predictive models for EV chassis material selection using machine learning.' },
  { year: '2023', title: 'B2M Product Frameworks', desc: 'Conducted large-scale empirical study on SaaS GTM strategies for EdTech.' },
  { year: '2022', title: 'Early AI Interventions', desc: 'Initial research phase for systemic academic and medical intervention systems.' },
];

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPapers = researchData.filter(
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#10B981]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fadeUp">
            <Library size={16} className="text-[#10B981]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Academic Publications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fadeUp">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#10B981]">Literature.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Documenting the intersection of GenAI, educational analytics, and product-led growth. My research aims to build scalable frameworks for the future of higher education.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <BookOpen size={18} className="text-[#10B981]" /> 10+ Published Papers
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <Globe size={18} className="text-[#10B981]" /> Global Citations
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <LayoutGrid className="text-white/20" />
              <h3 className="text-2xl font-black tracking-tight">Publication Archive</h3>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
              <input 
                type="text" 
                placeholder="Search concepts or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all text-white"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-24">
            {filteredPapers.map((paper) => (
              <div 
                key={paper.id}
                className="group bg-[#0D1635] rounded-[40px] p-4 border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 relative"
              >
                <div 
                  className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none transition-transform duration-1000 group-hover:scale-125"
                  style={{ backgroundColor: paper.color }}
                ></div>

                <div className="w-full lg:w-[420px] shrink-0 relative">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full rounded-[32px] overflow-hidden relative shadow-2xl">
                    <img src={paper.img} alt={paper.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D25] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-5 left-5">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10 ${paper.status === 'Published' ? 'bg-[#10B981]/80 text-white' : 'bg-[#F59E0B]/80 text-white'}`}>
                        <CheckCircle2 size={12} /> {paper.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 py-4 lg:py-10 lg:pr-10 relative z-10 flex flex-col">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      <Calendar size={12} /> {paper.year}
                    </span>
                    <span className="text-[#84ADFF] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 bg-[#3D5BF1]/10 px-3 py-1.5 rounded-full border border-[#3D5BF1]/20">
                      <Library size={12} /> {paper.journal}
                    </span>
                  </div>

                  <h4 className="text-3xl font-black tracking-tight text-white mb-6 leading-tight group-hover:text-[#10B981] transition-colors">
                    {paper.title}
                  </h4>

                  <p className="text-white/50 text-base leading-relaxed mb-10 flex-1">{paper.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 pt-8 border-t border-white/5">
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                         <Target size={14} className="text-[#10B981]" /> Core Domains
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map(kw => (
                          <span key={kw} className="px-3 py-1.5 rounded-xl bg-white/5 text-white/70 text-[11px] font-bold border border-white/5">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                        <Users size={14} className="text-[#3D5BF1]" /> Research Team
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {paper.authors.map((author, idx) => (
                          <span key={idx} className="flex items-center gap-2 text-xs font-bold text-white/80 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                             <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white/10 to-white/20"></div>
                             {author}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a href={paper.pdfUrl} className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#3D5BF1] text-white rounded-2xl text-[14px] font-black uppercase tracking-widest shadow-lg hover:bg-[#4361EE] hover:-translate-y-0.5 transition-all">
                      <Download size={16} /> Get PDF (Certificate)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-32">
            <div className="bg-[#0D1635] rounded-[40px] p-10 md:p-12 relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-transparent opacity-50" />
              <h3 className="text-3xl font-black tracking-tight mb-8 relative z-10 flex items-center gap-3">
                <FlaskConical className="text-[#10B981]" /> Innovation Scope
              </h3>
              <ul className="flex flex-col gap-5 relative z-10">
                {impactPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 size={24} className="text-[#3D5BF1] shrink-0" />
                    <span className="text-[17px] font-medium leading-tight text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#3D5BF1]/20 flex items-center justify-center mb-4 text-[#84ADFF]">
                  <BookOpen size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">10+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Publications</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 flex items-center justify-center mb-4 text-[#6EE7B7]">
                  <Users size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">15+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Co-Authors</div>
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
                <div className="text-4xl font-black text-white mb-1">5</div>
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
