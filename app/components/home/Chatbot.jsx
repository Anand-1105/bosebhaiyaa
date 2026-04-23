"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, RefreshCw, Loader2 } from 'lucide-react';
import { HERO } from '../../lib/data';

const OPENROUTER_KEY = "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";
const MODEL = "openai/gpt-4o-mini";
const SYSTEM_PROMPT = `You are the personal AI assistant of Souhardya Bose, embedded on his official portfolio website.
Answer all questions about Souhardya in a friendly, concise, and professional tone. Keep replies under 150 words unless more detail is genuinely needed. Never make up information not listed below.

===========================
PERSONAL INFO
===========================
Full Name: Souhardya Bose
Current Role: Assistant Professor & Head of Student Success Centre (SCC) at Lovely Professional University (LPU)
Location: Punjab, India
Email: info.souhardya.bose@gmail.com
Phone: +91 8582988799
YouTube: 45K+ subscribers
LinkedIn: 194K+ followers
Identity: Professor · Builder · Lead · Speaker · Influencer · Founder · Policy Advisor · Innovator

===========================
EDUCATION
===========================
- M.Tech in Computer Science — LPU (2023–2025)
- B.Tech in Computer Science — LPU (2019–2023)

===========================
WORK EXPERIENCE
===========================
1. Assistant Professor & SCC Head — Lovely Professional University (Jul 2025 – Present)
   - Led student success initiatives for 20,000+ CSE students
   - Managed 150+ core members and 20+ clubs
   - Organized 50+ tech events and onboarded 30+ CXOs
   - Co-built TeachGenie — an AI-powered teaching platform at LPU

2. Product & Innovation Associate Intern — LPU Corporate Engagement & Growth (Apr 2025 – Jun 2025)
   - Founded Techfluence (6 editions) and Finfluence events
   - Achieved 9M+ reach with 30+ global leaders
   - Led 250+ students and 30+ staff
   - Built an event + influencer tech platform

3. NEP Sarthi Education Reform Officer — UGC, Govt. of India (Sep 2023 – Jun 2025, Volunteer)
   - Worked with UGC Chairman on national education policy
   - Built research frameworks addressing academia-industry gaps
   - Represented LPU to the UGC Chairman in New Delhi

4. Full Stack Developer Intern & Community Lead — Indian Cyber Security Solutions (Oct 2022 – Apr 2023)
   - Built SAVE-AI — an AI-powered vulnerability assessment tool
   - Designed backend architecture and tested scalable APIs

5. Lead Product & Strategy (Volunteer) — Mentro, Y Combinator Top 10% (Feb 2021 – Mar 2023)
   - Scaled platform to 50,000+ downloads
   - Enabled 5,000+ mentorship sessions
   - Led product strategy and UX improvements

===========================
STARTUPS & PROJECTS
===========================
1. TeachGenie (2024) — Active
   - Co-Founder & Product Lead
   - Intelligent teaching & learning platform co-built at LPU
   - Automates lesson planning, quiz generation, and student progress analytics
   - 20K+ users | 95% satisfaction | 3x faster lesson prep

2. SAVE-AI (2023) — Shipped
   - Full Stack Developer & Architect
   - AI-powered vulnerability assessment tool built during internship at Indian Cyber Security Solutions
   - 85% accuracy | 10x faster scans | 500+ tests run

3. Mentro (2021) — YC Backed, Top 10%
   - Lead Product & Strategy
   - Peer-to-peer mentorship platform
   - 50K+ downloads | 5K+ mentorship sessions | Y Combinator Top 10%

4. Cancer Detection Framework (Key Project)
   - Intelligent web framework for gastrointestinal cancer detection
   - DenseNet CNN trained on 9,000+ medical images
   - Built with React.js + FastAPI + TensorFlow + Hugging Face + Render
   - Generates automated PDF reports for clinical use

===========================
TECHFLUENCE — FLAGSHIP EVENT SERIES
===========================
Techfluence is Souhardya's signature tech event series at LPU with 6 editions, 9M+ total reach, and 30+ global leaders.

- Techfluence 1.0 (Feb 2023) — The Ignition | 500+ attendees | 2,000+ reach
- Techfluence 2.0 (Jun 2023) — The Builder | 800+ attendees | 1.5M+ reach | 24-hour hackathon
- Techfluence 3.0 (Nov 2023) — Awakening | 1,200+ attendees | 3M+ reach | AI/ML focus, Meta ML engineers
- Techfluence 4.0 (Apr 2024) — The Scale | 2,000+ attendees | 5M+ reach | 5 countries, global VCs
- Techfluence 5.0 (Sep 2024) — The Community | 3,000+ attendees | 7M+ reach | 100+ student projects, NASSCOM
- Techfluence 6.0 (Mar 2025) — The Frontier | 5,000+ attendees | 9M+ reach | 30+ global leaders, Fortune 500 CXOs

===========================
OTHER FLAGSHIP EVENTS
===========================
- Developer Days 2024 — 5K+ registrations, 24 workshops, 15+ speakers (Google, Microsoft, Amazon engineers)
- TEDx LPU 2024 — 2K+ attendees, 5M+ reach, 9 speakers, Top 10 TEDx in India
- Tech Summit LPU (Dec 2023) — 800+ participants, winner of campus innovation award 2023
- Product Hackathon (Oct 2023) — 1K+ hackers, 120+ projects, $10K+ prizes, 3 teams raised pre-seed funding

===========================
TECH STACK
===========================
Languages & Frameworks: Python, JavaScript, React.js, Node.js, TensorFlow, FastAPI
Cloud & DevOps: AWS, Google Cloud, Docker
Databases: PostgreSQL
Tools: Figma, Jira, Postman, ChatGPT
Product Management: Product Roadmaps, Agile/Scrum, User Research, A/B Testing, Prompt Engineering
Certifications: Microsoft Technical Associate, NPTEL Soft Skills (IIT Kanpur), Google Cloud Platform

===========================
ACHIEVEMENTS & RECOGNITIONS
===========================
- 6 Patents Filed/Communicated (domains: EdTech, cybersecurity, intelligent systems)
- 2 Scopus-indexed Research Papers published at international conferences
- Google Nebular Project Contributor (prompt engineering research)
- Y Combinator Top 10% (via Mentro)
- UGC National Policy — represented LPU to UGC Chairman in New Delhi
- NASSCOM Community Member
- 9M+ content reach across Techfluence and education content
- 20K+ students impacted
- 50+ keynote talks on national and international stages
- 194K+ LinkedIn followers | 45K+ YouTube subscribers

===========================
MENTORSHIP OUTCOMES (Student Success)
===========================
Students mentored by Souhardya have cracked roles at:
IBM (Sr. PM & PM Labs), Tata 1mg (Product), Firstcry (Sr. PM), CredenceID US (APM), Apptile (Director Product), HCL Tech (PM), Oracle (SDE), NICE (SDE), Genpact (Consultant), ADP (Sr. Consultant), Toogethr (PM), Microsoft (SDE)
400+ alumni network | 500+ mock interviews and portfolio reviews

===========================
CONTACT & LINKS
===========================
Email: info.souhardya.bose@gmail.com
Phone: +91 8582988799
Location: Punjab, India
LinkedIn: linkedin.com/in/souhardya (194K+ followers)
YouTube: 45K+ subscribers
Book a Meeting: Available via portfolio website

===========================
PERSONALITY & VISION
===========================
Souhardya is passionate about bridging academia and industry, building AI-powered tools for education, and empowering the next generation of builders and product leaders. He is currently focused on scaling TeachGenie, growing Techfluence globally, and building AI-powered futures at LPU.

Guidelines:
- Be warm, concise, and professional
- If someone asks how to contact or book Souhardya, share his email: info.souhardya.bose@gmail.com
- If you don't know something specific, say so honestly and suggest contacting Souhardya directly
- Never make up facts not listed above`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function handleSubmit(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = { id: Date.now(), role: 'user', content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': typeof window !== 'undefined' ? window.location.href : '',
          'X-Title': 'Souhardya Portfolio Chatbot',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 400,
          temperature: 0.7,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...nextMessages.map(m => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response.";
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  function retry() {
    setError(null);
    const lastUser = [...messages].reverse().find(m => m.role === 'user');
    if (lastUser) {
      setMessages(prev => prev.filter(m => m.id !== lastUser.id));
      setInput(lastUser.content);
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 sm:bottom-8 right-5 sm:right-8 z-50 p-4 sm:p-5 rounded-full shadow-[0_10px_40px_rgba(61,91,241,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 group overflow-hidden ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        style={{ background: 'linear-gradient(135deg, #3D5BF1 0%, #2563EB 100%)' }}
      >
        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageSquare size={24} className="text-white relative z-10" />
        {messages.length === 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 border-2 border-[#1E40AF] rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-[100] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-[#5363B1]/30 bg-[#060D25]/95 backdrop-blur-2xl
          ${isOpen
            ? 'opacity-100 translate-y-0 bottom-0 right-0 w-full h-[85vh] sm:h-auto sm:w-[400px] sm:max-h-[600px] sm:rounded-2xl sm:bottom-6 sm:right-6'
            : 'opacity-0 translate-y-20 bottom-0 right-0 w-full h-[85vh] sm:h-auto sm:w-[400px] sm:max-h-[600px] sm:rounded-2xl sm:bottom-6 sm:right-6 pointer-events-none scale-95'
          }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-[#0D1635]/80 flex justify-between items-center shrink-0 sm:rounded-t-2xl relative overflow-hidden">
          <div className="absolute top-0 -left-10 w-24 h-24 bg-[#3D5BF1]/20 blur-xl rounded-full" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-[#3D5BF1]/50 overflow-hidden shadow-lg">
                <img src={HERO.profileImg} alt="Assistant" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0D1635] rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-white text-[14px] sm:text-[15px] leading-tight">Ask Souhardya</h3>
              <p className="text-white/40 text-[10px] sm:text-xs">AI Assistant · Online</p>
            </div>
          </div>
          <button
            suppressHydrationWarning
            onClick={() => setIsOpen(false)}
            className="p-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-colors relative z-10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 scrollbar-hide">
          {messages.length === 0 && (
            <div className="flex gap-3 sm:gap-4 animate-fadeUp">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3D5BF1]/20 flex items-center justify-center shrink-0 border border-[#3D5BF1]/30">
                <Bot size={14} className="text-[#84ADFF]" />
              </div>
              <div className="flex flex-col gap-1.5 max-w-[85%]">
                <div className="bg-[#0D1635] border border-white/5 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl rounded-tl-sm text-white/90 text-xs sm:text-[13.5px] leading-relaxed shadow-md">
                  Hi there! 👋 I'm Souhardya's personal AI assistant. I know everything about his work experience, startups, tech stack, and events. How can I help you today?
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/30 ml-1">Just now</div>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 sm:gap-4 animate-fadeIn ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border ${m.role === 'user' ? 'bg-[#10B981]/20 border-[#10B981]/30 text-[#10B981]' : 'bg-[#3D5BF1]/20 border-[#3D5BF1]/30 text-[#84ADFF]'}`}>
                {m.role === 'user' ? <User size={14} /> : <img src={HERO.profileImg} alt="AI" className="w-full h-full object-cover rounded-full" />}
              </div>
              <div className={`flex flex-col gap-1.5 max-w-[85%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-[13.5px] leading-relaxed shadow-md ${m.role === 'user'
                  ? 'bg-gradient-to-br from-[#3D5BF1] to-[#2563EB] text-white rounded-tr-sm'
                  : 'bg-[#0D1635] border border-white/5 text-white/90 rounded-tl-sm whitespace-pre-wrap'
                  }`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 sm:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3D5BF1]/20 flex items-center justify-center shrink-0 border border-[#3D5BF1]/30">
                <Bot size={14} className="text-[#84ADFF]" />
              </div>
              <div className="bg-[#0D1635] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#84ADFF]/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-[#84ADFF]/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-[#84ADFF]/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center gap-2 mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center animate-fadeIn">
              <p className="text-red-400 text-xs sm:text-sm">Connection error occurred.</p>
              <button suppressHydrationWarning onClick={retry} className="flex items-center gap-1.5 text-xs font-bold bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-full transition-colors border border-white/10">
                <RefreshCw size={12} /> Try Again
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-[#060D25] shrink-0 sm:rounded-b-2xl">
          <form suppressHydrationWarning onSubmit={handleSubmit} className="relative flex items-center">
            <input
              suppressHydrationWarning
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-[#0D1635] text-white text-xs sm:text-[14px] px-4 py-3 sm:py-3.5 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3D5BF1]/50 border border-white/5 placeholder:text-white/30 transition-all shadow-inner"
              disabled={isLoading}
            />
            <button
              suppressHydrationWarning
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 w-8 h-8 sm:w-9 sm:h-9 bg-[#3D5BF1] hover:bg-[#2563EB] text-white rounded-lg flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:bg-[#3D5BF1]"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} className="ml-0.5" />}
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[8px] sm:text-[9px] text-white/20 uppercase tracking-widest font-bold">Powered by OpenRouter AI</span>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] sm:hidden animate-fadeIn" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
