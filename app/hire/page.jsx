"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/home/Navbar';
import { InlineWidget } from "react-calendly";
import { 
  ArrowLeft, Code2, GraduationCap, Mic2, TrendingUp, BookOpen, 
  CheckCircle2, Briefcase, Users, Award, Globe, Presentation, 
  Lightbulb, Cpu, Layers, Video, PenTool, BarChart3, Target, 
  Megaphone, BookMarked, Mail, Send, Loader2, Calendar, MessageSquare
} from 'lucide-react';

const categories = [
  {
    id: 'technical',
    label: 'Technical',
    icon: Code2,
    color: '#4361EE',
    tagline: 'Full-Stack Development & AI Infrastructure',
    description: 'With extensive technical experience, Souhardya architects scalable solutions that solve real-world business bottlenecks, marrying GenAI capabilities with robust full-stack architectures.',
  },
  {
    id: 'professor',
    label: 'Professor',
    icon: GraduationCap,
    color: '#10B981',
    tagline: 'Bridging Academia & Industry',
    description: 'As an educator at LPU, Souhardya specializes in DSA, System Design, and AI, ensuring students are day-one ready for tier-1 tech companies.',
  },
  {
    id: 'speaker',
    label: 'Speaker',
    icon: Mic2,
    color: '#F59E0B',
    tagline: 'Global Keynotes & Tech Strategy',
    description: 'A globally recognized conference speaker with over 60 international engagements, distilling complex paradigms into inspiring narratives.',
  },
  {
    id: 'other',
    label: 'Other',
    icon: MessageSquare,
    color: '#8B5CF6',
    tagline: 'General Inquiries & Collaborations',
    description: 'Have something else in mind? Reach out for general questions, unique partnership opportunities, or just to say hello.',
  }
];

export default function HireMePage() {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'technical'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', category: activeCategory });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#060D25] text-white min-h-screen selection:bg-[#3D5BF1]/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-[#3D5BF1]/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Mail size={16} className="text-[#3D5BF1]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Work With Me</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84ADFF] to-[#3D5BF1]">Something Great.</span>
          </h1>
          <p className="text-white/40 max-w-2xl text-base sm:text-lg leading-relaxed">
            Whether you need a technical partner, a speaker for your next event, or a consultant for your product strategy — I'm ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-32 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0D1635] rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                  <Send size={200} />
                </div>
                
                <h3 className="text-3xl font-black tracking-tight mb-8">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Subject</label>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Inquiry Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setFormData(prev => ({ ...prev, category: cat.id }));
                          }}
                          className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeCategory === cat.id ? 'bg-[#3D5BF1] text-white shadow-lg' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 transition-all resize-none"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-[#3D5BF1] text-white py-5 rounded-2xl text-[14px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-[#4361EE] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                    {isSubmitting ? 'Sending...' : 'Transmit Inquiry'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981] p-4 rounded-2xl flex items-center gap-3">
                      <CheckCircle2 size={20} />
                      <span className="text-sm font-bold">Message received! I'll get back to you shortly.</span>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-2xl flex items-center gap-3">
                      <Users size={20} />
                      <span className="text-sm font-bold">Failed to send. Please try again or email directly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right: Booking Section */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-[#0D1635] rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden flex-1">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-[#3D5BF1]/20 flex items-center justify-center text-[#3D5BF1]">
                      <Calendar size={24} />
                   </div>
                   <h3 className="text-2xl font-black tracking-tight">Book a Meeting</h3>
                </div>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Prefer a direct conversation? Schedule a 30-minute discovery call via Calendly to discuss your requirements.
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white min-h-[450px]">
                  <InlineWidget 
                    url="https://calendly.com/anand01ts/30min" 
                    styles={{ height: '450px' }}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '3D5BF1',
                      textColor: '060D25'
                    }}
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#3D5BF1] to-[#4361EE] rounded-[32px] p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <h4 className="text-xl font-bold mb-4">Urgent Inquiries?</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  For time-sensitive partnerships or technical emergencies, please reach out directly via email.
                </p>
                <a href="mailto:info.souhardya.bose@gmail.com" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-white text-[#3D5BF1] px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                  <Mail size={16} /> info.souhardya.bose@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="text-2xl font-black tracking-tighter mb-4">
            Souhardya <span className="font-serif italic text-white/60">Bose.</span>
          </div>
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">Professor · Consultant · Speaker</p>
        </div>
      </footer>
    </main>
  );
}
