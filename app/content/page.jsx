"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Search, PlaySquare, Play, 
  MonitorPlay, Smartphone, Lightbulb, Hexagon,
  ChevronRight, ExternalLink, Code2, Network
} from 'lucide-react';

const topics = ['All', 'AI', 'GenAI', 'Java', 'DSA'];

const contentData = [
  {
    id: 1,
    title: 'Mastering Java Collections Framework in 1 Hour',
    type: 'YouTube',
    topic: 'Java',
    duration: '58:20',
    views: '12K',
    date: '2 weeks ago',
    thumbnail: '/img/gallery/5.jpeg',
    link: '#',
    color: '#FF0000', // YouTube Red
  },
  {
    id: 2,
    title: 'How Generative AI is Changing Product Management',
    type: 'LinkedIn',
    topic: 'GenAI',
    duration: 'Article/Post',
    views: '8.5K',
    date: '1 month ago',
    thumbnail: '/img/gallery/13.jpeg',
    link: '#',
    color: '#0A66C2', // LinkedIn Blue
  },
  {
    id: 3,
    title: 'Top 5 DSA Questions for FAANG Interviews',
    type: 'Instagram',
    topic: 'DSA',
    duration: 'Reel',
    views: '45K',
    date: '3 weeks ago',
    thumbnail: '/img/gallery/7.jpeg',
    link: '#',
    color: '#E1306C', // Instagram Pink
  },
  {
    id: 4,
    title: 'Introduction to Neural Networks and Deep Learning',
    type: 'YouTube',
    topic: 'AI',
    duration: '1:15:00',
    views: '22K',
    date: '2 months ago',
    thumbnail: '/img/gallery/8.jpeg',
    link: '#',
    color: '#FF0000',
  },
  {
    id: 5,
    title: 'Building a Spring Boot Microservice from Scratch',
    type: 'YouTube',
    topic: 'Java',
    duration: '45:10',
    views: '15K',
    date: '10 days ago',
    thumbnail: '/img/gallery/9.jpeg',
    link: '#',
    color: '#FF0000',
  },
  {
    id: 6,
    title: 'Will AI Replace Software Engineers? My Thoughts',
    type: 'LinkedIn',
    topic: 'AI',
    duration: 'Video Post',
    views: '10K',
    date: '1 week ago',
    thumbnail: '/img/gallery/12.jpeg',
    link: '#',
    color: '#0A66C2',
  }
];

// Helper to get Icon by type
const getPlatformIcon = (type) => {
  switch(type) {
    case 'YouTube': return <MonitorPlay size={16} />;
    case 'Instagram': return <Smartphone size={16} />;
    case 'LinkedIn': return <Network size={16} />;
    default: return <PlaySquare size={16} />;
  }
};

export default function ContentPage() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredContent = contentData.filter((item) => {
    const matchesTopic = activeTopic === 'All' || item.topic === activeTopic;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="bg-[#EAEAE5] text-[#1A1A1A] min-h-screen font-sans antialiased relative overflow-hidden selection:bg-[#1A1A1A] selection:text-[#EAEAE5]">
      
      {/* Background Graphic Elements */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-white opacity-50 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#E1306C]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Top Navbar */}
      <nav className="relative z-10 py-5 px-6 md:px-10 max-w-[1400px] mx-auto flex justify-between items-center border-b border-black/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={16} className="text-[#EAEAE5]" />
          </div>
          <div className="font-bold tracking-tighter text-2xl flex flex-col leading-none">
            <span>Souhardya</span>
            <span className="font-serif italic text-sm text-gray-600">Bose.</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/hire" className="hidden sm:inline-flex text-sm font-bold text-gray-500 hover:text-[#1A1A1A] transition-colors">Hire Me</Link>
          <div className="h-4 w-px bg-black/10 hidden sm:block"></div>
          <h1 className="text-sm font-bold tracking-widest uppercase text-gray-500">Social Lectures</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white shadow-sm mb-6 text-sm font-bold tracking-widest text-gray-600 uppercase w-auto mx-auto backdrop-blur-md">
          <PlaySquare size={16} className="text-[#E1306C]" /> Masterclasses & Insights
        </div>
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
          Social Content & <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-gray-500">Video Lectures.</span>
        </h2>
        
        <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          "Free, high-quality educational content across YouTube, Instagram, and LinkedIn covering AI, Java, and modern tech."
        </p>

        {/* Platform Mini-Stats */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold text-[#1A1A1A]">
          <div className="flex items-center gap-2 bg-white/50 px-5 py-2.5 rounded-full border border-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform">
            <MonitorPlay size={18} className="text-[#FF0000]" /> YouTube Mentorship
          </div>
          <div className="flex items-center gap-2 bg-white/50 px-5 py-2.5 rounded-full border border-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform">
            <Smartphone size={18} className="text-[#E1306C]" /> Instagram Reels
          </div>
          <div className="flex items-center gap-2 bg-white/50 px-5 py-2.5 rounded-full border border-white/50 backdrop-blur-sm shadow-sm hover:-translate-y-0.5 transition-transform">
            <Network size={18} className="text-[#0A66C2]" /> LinkedIn Insights
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pb-24">

        {/* Filtering & Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 bg-white/40 p-4 pl-6 rounded-full border border-white/60 backdrop-blur-md shadow-sm">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mr-2 shrink-0">Topics:</span>
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shrink-0 ${
                  activeTopic === topic 
                    ? 'bg-[#1A1A1A] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#1A1A1A]'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-80 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search lectures..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20 focus:border-[#1A1A1A] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Video / Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredContent.length > 0 ? filteredContent.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-3xl p-3 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image/Thumbnail Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden relative mb-5">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 text-white shadow-xl">
                    <Play size={24} className="ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                  {item.duration}
                </div>

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/20 shadow-sm" style={{ backgroundColor: `${item.color}90` }}>
                  {getPlatformIcon(item.type)} {item.type}
                </div>
              </div>

              {/* Content Formatting */}
              <div className="px-3 pb-3 flex flex-col flex-1 border-b-2 border-transparent transition-colors duration-500 rounded-b-xl" style={{ borderBottomColor: item.color }}>
                
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Hexagon size={12} className="text-[#1A1A1A]" fill="#1A1A1A" /> {item.topic}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A] leading-snug mb-4 group-hover:text-[#4361EE] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-gray-500">{item.views} views</span>
                  <a href={item.link} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-20 bg-white rounded-[2.5rem] border border-black/5">
              <Code2 size={48} className="mx-auto text-gray-300 mb-4" />
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">No content found</h4>
              <p className="text-gray-500">Try adjusting your topic filter or search query.</p>
            </div>
          )}
        </div>

        {/* CTA Section - Subscribe/Follow */}
        <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-[-20%] left-[20%] w-[300px] h-[300px] bg-[#FF0000] opacity-20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[20%] w-[300px] h-[300px] bg-[#0A66C2] opacity-20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Never miss a lecture.
            </h3>
            <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              Join thousands of students and professionals. Subscribe on YouTube and follow on LinkedIn for daily coding insights, AI breakdowns, and career strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#FF0000] text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:-translate-y-1 transition-all uppercase flex items-center gap-3 w-full sm:w-auto justify-center border border-[#FF0000]/50">
                <MonitorPlay size={18} /> Subscribe YouTube
              </button>
              <button className="bg-[#0A66C2] text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:shadow-[0_0_30px_rgba(10,102,194,0.4)] hover:-translate-y-1 transition-all uppercase flex items-center gap-3 w-full sm:w-auto justify-center border border-[#0A66C2]/50">
                <Network size={18} /> Follow LinkedIn
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
