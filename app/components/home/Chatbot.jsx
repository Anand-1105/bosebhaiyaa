"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, RefreshCw, Loader2 } from 'lucide-react';
import { HERO } from '../../lib/data';

import { useChat } from '@ai-sdk/react';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error, reload } = useChat({
    api: '/api/chat',
    initialMessages: [],
  });

  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  function retry() {
    reload();
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
              onChange={handleInputChange}
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
