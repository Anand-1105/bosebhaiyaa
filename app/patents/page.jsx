"use client";

import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import ContactSection from '../components/home/ContactSection';
import {
  ArrowRight, Download, ShieldCheck,
  FileText, Calendar, Award, Globe, 
  Lightbulb, CheckCircle2, FlaskConical, LayoutGrid, ChevronRight, BookOpen
} from 'lucide-react';

const patentsData = [
  {
    id: '202411078975-1',
    title: 'ACID — Advance Candidates ID Card',
    number: '202411078975',
    year: '2024',
    status: 'Published',
    office: 'Indian Patent Office',
    description: 'Lost/stolen ID cards enabling impersonation, unauthorized access to campus resources, academic misconduct, financial misuse.',
    technologies: ['Smart ID Systems', 'Security', 'Campus Infrastructure'],
    inventors: ['Prof. Souhardya Bose', 'Research Team'],
    pdfUrl: 'https://drive.google.com/file/d/1RCQgBi7Lac1Xp5Urbksn2J06yHBvS1p1/view',
    color: '#4361EE'
  },
  {
    id: '202411078975-2',
    title: 'Deforestation & Fire Detection',
    number: '202411078975',
    year: '2024',
    status: 'Published',
    office: 'Indian Patent Office',
    description: 'Prevention of illegal tree cutting via knock sensors; Early forest fire detection via humidity/temperature sensors; Enhanced forest monitoring.',
    technologies: ['IoT', 'Sensor Networks', 'Environmental Monitoring'],
    inventors: ['Prof. Souhardya Bose'],
    pdfUrl: 'https://drive.google.com/file/d/10guuu3I-mk8hHEUutG1LJO96Hhu-tMC1/view',
    color: '#10B981'
  },
  {
    id: '202411079567',
    title: 'Barrier Roller with M.F.',
    number: '202411079567',
    year: '2024',
    status: 'Published',
    office: 'Indian Patent Office',
    description: 'Enhance road safety on hilly/sharp-turn areas; prevent secondary collisions; reduce vehicle speed on impact; auto-send live location to emergency services; prevent vehicles from falling off dangerous terrain.',
    technologies: ['Road Safety', 'IoT', 'Emergency Systems'],
    inventors: ['Prof. Souhardya Bose'],
    pdfUrl: 'https://drive.google.com/file/d/1bgdte8u_RK129LrReSjqHFepDT64Hmwb/view?usp=drive_link',
    color: '#F59E0B'
  },
  {
    id: 'SB-2024',
    title: 'Smart Board (Stylus Recognition & Self-Cleaning)',
    number: 'Proposal ID: 12318767',
    year: '2024',
    status: 'Proposal',
    office: 'Indian Patent Office (LPU)',
    description: 'A smart educational interface that differentiates between styluses and unauthorized ink markers, triggering an alarm and utilizing a motorized self-cleaning surface to prevent board damage.',
    technologies: ['Electromagnetic Sensing', 'Pressure Detection', 'Automated Cleaning'],
    inventors: ['Shahnawaz Alam', 'Dr. Prateek Agrawal', 'Dr. Vishu', 'Souhardya Bose'],
    pdfUrl: 'https://docs.google.com/document/d/1htllkqnx6fucQWzNBP7nFTOel064Xq-UVVSkITFBrRc',
    color: '#8B5CF6'
  },
  {
    id: 'SL-2024',
    title: 'SmartGuard Luggage (Active Theft Deterrence)',
    number: 'Proposal ID: 12318767',
    year: '2024',
    status: 'Proposal',
    office: 'Indian Patent Office (LPU)',
    description: 'Advanced travel security system featuring three-level access control, biometric scanning, GPS tracking, and an active electric deterrent handle with proximity buzzers.',
    technologies: ['Biometrics', 'GPS Tracking', 'Active Security'],
    inventors: ['Shahnawaz Alam', 'Dr. Prateek Agrawal', 'Dr. Vishu', 'Souhardya Bose'],
    pdfUrl: 'https://docs.google.com/document/d/1s00HyZdwxDP9cQCmjQ3K5C-C8irFUr8H-IFLyqqXNQw',
    color: '#EF4444'
  },
  {
    id: 'MCDS-2024',
    title: 'Mobile Charger Deo Stand',
    number: 'Proposal ID: 12318767',
    year: '2024',
    status: 'Proposal',
    office: 'Indian Patent Office (LPU)',
    description: 'Universal dual-device charging stand featuring built-in UV sanitization, active cooling fans with RGB lighting, and vacuum suction for surface stability.',
    technologies: ['UV Sanitization', 'Thermal Management', 'Industrial Design'],
    inventors: ['Shahnawaz Alam', 'Dr. Prateek Agrawal', 'Dr. Vishu', 'Souhardya Bose'],
    pdfUrl: 'https://docs.google.com/document/d/1n8innkhJp7p5OA2DTvzIzGdmRX5KxLFI9gYMyrrnsVM',
    color: '#EC4899'
  },
  {
    id: 'DNJ-2024',
    title: 'Drone with Network Jammer for Law Enforcement',
    number: 'Proposal ID: 12318767',
    year: '2024',
    status: 'Proposal',
    office: 'Indian Patent Office (LPU)',
    description: 'Autonomous suspect-tracking drone equipped with FPV night vision, physical anchor mechanisms for vehicle attachment, and high-frequency network jammers to block evasion communication.',
    technologies: ['Unmanned Aerial Systems', 'RF Jamming', 'Autonomous Tracking'],
    inventors: ['Shahnawaz Alam', 'Dr. Prateek Agrawal', 'Dr. Vishu', 'Souhardya Bose'],
    pdfUrl: 'https://docs.google.com/document/d/1m-hQXh2odW377ZoqWt3-JKS0i7BasidAX-53QtkNOG8',
    color: '#6366F1'
  },
  {
    id: 'WBCP-2024',
    title: 'Water Bottle Cap Protector',
    number: 'Proposal ID: 12318767',
    year: '2024',
    status: 'Proposal',
    office: 'Indian Patent Office (LPU)',
    description: 'Smart silicone protector with shock absorption, integrated UV sanitization zone, LED temperature display, and a built-in network jammer for focused work environments.',
    technologies: ['Smart Materials', 'UV Hygiene', 'Focused Connectivity'],
    inventors: ['Shahnawaz Alam', 'Dr. Prateek Agrawal', 'Dr. Vishu', 'Souhardya Bose'],
    pdfUrl: 'https://docs.google.com/document/d/16SjbugqKlK1PrsdAQewslAPLuVi1pgFvkPcpxQrBQ8E',
    color: '#06B6D4'
  }
];

const impactPoints = [
  "Improving student career guidance using AI",
  "Bridging education and technology",
  "Promoting innovation in academic research",
  "Contributing to AI based learning systems"
];

const timelineData = [
  { year: '2025', title: 'AI Based Career Recommendation System', desc: 'Granted system utilizing LLMs for personalized career mapping.' },
  { year: '2024', title: 'Intelligent Learning Analytics Platform', desc: 'Predictive analytics for student retention and outcome modeling.' },
  { year: '2023', title: 'AI Powered Resume Evaluation System', desc: 'Automated skill-extraction and resume scoring engine.' },
  { year: '2022', title: 'Smart Education Monitoring System', desc: 'Real-time engagement tracking in virtual learning environments.' },
];

export default function PatentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatents = patentsData.filter(
    (patent) =>
      patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.technologies.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
            Patents & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Innovation.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            Transforming academic insights into legally recognized intellectual assets. My patent portfolio focuses on AI-driven educational frameworks and predictive student analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <span className="text-[#84ADFF]">📜</span> 6 Patents Filed
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm shadow-sm text-sm font-bold">
              <span className="text-[#84ADFF]">🌍</span> Global IP Offices
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex items-center gap-4 mb-12">
            <LayoutGrid className="text-white/20" />
            <h3 className="text-2xl font-black tracking-tight">Patent Portfolio</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="flex flex-col gap-8 mb-24">
            {filteredPatents.map((patent) => (
              <div
                key={patent.id}
                className="bg-[#0D1635] rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl group hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div
                  className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundColor: patent.color }}
                ></div>

                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${patent.status === 'Granted' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'}`}>
                        <ShieldCheck size={14} /> {patent.status}
                      </span>
                      <span className="text-white/40 text-sm font-bold flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        <Calendar size={14} /> {patent.year}
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6 leading-tight">
                      {patent.title}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Patent Number</span>
                        <span className="text-white font-mono text-sm">{patent.number}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Issuing Office</span>
                        <span className="text-white text-sm">{patent.office}</span>
                      </div>
                      <div className="flex flex-col gap-1 sm:col-span-2 mt-2">
                        <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Lead Inventors</span>
                        <span className="text-white text-sm">{patent.inventors.join(', ')}</span>
                      </div>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed mb-8">{patent.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {patent.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold hover:bg-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-72 shrink-0 flex flex-col justify-end gap-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-10">
                    <div className="hidden lg:flex flex-1 items-center justify-center p-4">
                      <FileText size={64} className="text-white/10" />
                    </div>

                    <a
                      href={patent.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#3D5BF1] text-white py-4 rounded-2xl text-[15px] font-bold shadow-lg hover:bg-[#4361EE] hover:-translate-y-0.5 transition-all text-center"
                    >
                      View Patent <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-32">
            <div className="bg-[#0D1635] rounded-[32px] p-10 md:p-12 relative overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3D5BF1]/10 to-transparent opacity-50" />
              <h3 className="text-3xl font-black tracking-tight mb-8 relative z-10 flex items-center gap-3">
                <FlaskConical className="text-[#3D5BF1]" /> Research Impact
              </h3>
              <ul className="flex flex-col gap-5 relative z-10">
                {impactPoints.map((point, idx) => (
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
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Patents Filed</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 flex items-center justify-center mb-4 text-[#6EE7B7]">
                  <BookOpen size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">2</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Research Papers</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors text-[#F59E0B]">
                <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mb-4">
                  <Globe size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">60+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Global Events</div>
              </div>
              <div className="bg-white/5 rounded-[32px] p-8 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <Award size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">20+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Years Exp.</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-32">
            <h3 className="text-3xl font-black tracking-tight mb-16 text-center">Research Timeline</h3>
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-10">
              {timelineData.map((item, index) => (
                <div key={index} className="mb-12 ml-12 relative group">
                  <div className="absolute -left-[57px] top-1 w-6 h-6 bg-[#060D25] border-4 border-white/10 rounded-full group-hover:border-[#3D5BF1] group-hover:scale-125 transition-all"></div>
                  <div className="text-[11px] font-black tracking-widest text-[#84ADFF] mb-2 uppercase">{item.year}</div>
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
