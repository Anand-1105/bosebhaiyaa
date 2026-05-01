"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, Calendar, ExternalLink, Square, History, Plus, ChevronLeft, MessageCircle } from 'lucide-react';

// Simple markdown parser for bold text
const renderMessageContent = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-black text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Typewriter effect component
const Typewriter = ({ text, onComplete, speed = 15, isPaused = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // If text changes and is shorter than displayed, reset (unlikely in streaming)
    // If text grows, keep typing
    if (isPaused) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, isPaused]);

  return <div className="whitespace-pre-wrap">{renderMessageContent(displayedText)}</div>;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatError, setChatError] = useState(null);
  const [view, setView] = useState('chat'); // 'chat' or 'history'
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const abortControllerRef = useRef(null);


  const clearError = () => setChatError(null);

  const handleStop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsLoading(false);
    setIsPaused(true);
    setIsTyping(false);
  }, []);

  const handleTypewriterComplete = useCallback((id) => {
    setMessages(prev => prev.map(m => 
      m.id === id ? { ...m, isComplete: true } : m
    ));
    setIsTyping(false);
  }, []);

  const startNewChat = useCallback(() => {
    const newId = Date.now().toString();
    const newSession = { id: newId, messages: [], timestamp: newId, title: 'New Conversation' };
    setSessions(prev => [newSession, ...prev]);
    setActiveSessionId(newId);
    setMessages([]);
    setView('chat');
    setIsPaused(false);
    setIsTyping(false);
    setIsLoading(false);
  }, []);

  const loadSession = (id) => {
    const session = sessions.find(s => s.id === id);
    if (session) {
      setActiveSessionId(id);
      setMessages(session.messages);
      setView('chat');
    }
  };

  const deleteSession = (e, id) => {
    e.stopPropagation();
    const newSessions = sessions.filter(s => s.id !== id);
    setSessions(newSessions);
    if (activeSessionId === id) {
      if (newSessions.length > 0) {
        loadSession(newSessions[0].id);
      } else {
        startNewChat();
      }
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    if (chatError) clearError();
    
    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    const assistantId = (Date.now() + 1).toString();
    const assistantMessage = { id: assistantId, role: 'assistant', content: '', isComplete: false };
    
    const newMessages = [...messages, userMessage, assistantMessage];
    setMessages(newMessages);
    
    // Update session title if it's the first message
    if (messages.length === 0) {
      setSessions(prev => prev.map(s => 
        s.id === activeSessionId ? { ...s, title: input.slice(0, 30) + (input.length > 30 ? '...' : '') } : s
      ));
    }

    setInput('');
    setIsLoading(true);
    setIsPaused(false);
    setIsTyping(true);
    
    // Initialize AbortController
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
        signal: abortController.signal
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to get response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        fullContent += decoder.decode(value, { stream: true });
        const updatedMessages = messagesRef.current.map(m => 
          m.id === assistantId ? { ...m, content: fullContent } : m
        );
        setMessages(updatedMessages);
      }

      // After streaming is done, check if we should summarize for the title
      // We do this after the 3rd message pair (index 5)
      const currentMessages = messagesRef.current;
      if (currentMessages.length === 6) {
        try {
          const summaryRes = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              messages: currentMessages.slice(0, 6), 
              type: 'summary' 
            }),
          });
          if (summaryRes.ok) {
            const { title } = await summaryRes.json();
            setSessions(prev => prev.map(s => 
              s.id === activeSessionId ? { ...s, title, isSummarized: true } : s
            ));
          }
        } catch (e) {
          console.error('Failed to summarize title:', e);
        }
      }

    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Chat response stopped by user');
      } else {
        console.error('Chat Error:', err);
        setChatError(err.message);
        // Remove the empty assistant message on error
        setMessages(prev => prev.filter(m => m.id !== assistantId));
        setIsTyping(false);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const scrollRef = useRef(null);

  // Use ref to keep messages updated for the streaming closure
  const messagesRef = useRef(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('sb_chat_sessions_v2');
    if (saved) {
      try {
        const { sessions: savedSessions, activeId } = JSON.parse(saved);
        if (savedSessions && savedSessions.length > 0) {
          setSessions(savedSessions);
          const current = savedSessions.find(s => s.id === activeId) || savedSessions[0];
          setActiveSessionId(current.id);
          setMessages(current.messages);
        } else {
          startNewChat();
        }
      } catch (e) {
        console.error('Failed to load sessions:', e);
        startNewChat();
      }
    } else {
      startNewChat();
    }
  }, [startNewChat]);

  useEffect(() => {
    if (mounted && activeSessionId) {
      const updatedSessions = sessions.map(s => 
        s.id === activeSessionId ? { ...s, messages } : s
      );
      localStorage.setItem('sb_chat_sessions_v2', JSON.stringify({ 
        sessions: updatedSessions, 
        activeId: activeSessionId 
      }));
    }
  }, [messages, activeSessionId, mounted, sessions]);

  // Retroactive summarization for existing chats
  useEffect(() => {
    if (!mounted || isLoading || view === 'history') return;
    
    const activeSession = sessions.find(s => s.id === activeSessionId);
    if (activeSession && activeSession.messages.length >= 6 && !activeSession.isSummarized) {
      const summarizeExisting = async () => {
        try {
          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              messages: activeSession.messages.slice(0, 6), 
              type: 'summary' 
            }),
          });
          if (res.ok) {
            const { title } = await res.json();
            setSessions(prev => prev.map(s => 
              s.id === activeSessionId ? { ...s, title, isSummarized: true } : s
            ));
          }
        } catch (e) {
          console.error('Retroactive summary failed:', e);
        }
      };
      summarizeExisting();
    }
  }, [activeSessionId, sessions, mounted, isLoading, view]);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      // Use a small timeout to ensure the DOM has updated and is visible
      const timer = setTimeout(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] bg-[#0D1635] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#3D5BF1] to-[#4361EE] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {view === 'history' ? (
                <button 
                  onClick={() => setView('chat')}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Bot size={20} className="text-white" />
                </div>
              )}
              <div>
                <h3 className="text-white font-black text-sm uppercase tracking-wider">
                  {view === 'history' ? 'Chat History' : 'SB AI Assistant'}
                </h3>
                {view === 'chat' && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Always Online</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {view === 'chat' && (
                <>
                  <button 
                    onClick={startNewChat}
                    title="New Chat"
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                  >
                    <Plus size={18} />
                  </button>
                  <button 
                    onClick={() => setView('history')}
                    title="History"
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                  >
                    <History size={18} />
                  </button>
                </>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors ml-1"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area / History View */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            {view === 'history' ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {sessions.length === 0 ? (
                  <div className="text-center py-20">
                    <History size={40} className="mx-auto text-white/10 mb-4" />
                    <p className="text-white/30 text-sm">No history yet</p>
                  </div>
                ) : (
                  sessions.map(s => (
                    <div 
                      key={s.id}
                      onClick={() => loadSession(s.id)}
                      className={`group relative p-4 rounded-2xl border transition-all cursor-pointer ${activeSessionId === s.id ? 'bg-[#3D5BF1]/20 border-[#3D5BF1]/50' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm truncate pr-6">{s.title}</h4>
                          <p className="text-white/40 text-[10px] mt-1 font-medium">
                            {new Date(parseInt(s.timestamp)).toLocaleDateString()} · {s.messages.length} messages
                          </p>
                        </div>
                        <button 
                          onClick={(e) => deleteSession(e, s.id)}
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-white/20 hover:text-red-400 transition-all"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <>
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
                      <MessageCircle size={24} className="text-[#3D5BF1]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Ask me anything!</p>
                      <p className="text-white/40 text-[11px] mt-2 px-8 leading-relaxed">
                        I can tell you about Souhardya's background, projects, or help you book a meeting.
                      </p>
                    </div>
                  </div>
                )}
                
                {messages.map((m) => (
                  <div 
                    key={m.id} 
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-[#3D5BF1] text-white' : 'bg-white/5 border border-white/10 text-white/60'}`}>
                        {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-[#3D5BF1] text-white rounded-tr-none' 
                          : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'
                      }`}>
                        <div className="whitespace-pre-wrap">
                          {m.role === 'assistant' && !m.isComplete ? (
                            <Typewriter 
                              text={m.content} 
                              isPaused={isPaused} 
                              onComplete={() => handleTypewriterComplete(m.id)}
                            />
                          ) : (
                            renderMessageContent(m.content)
                          )}
                        </div>
                        {m.role === 'assistant' && m.content?.toLowerCase().includes('calendly.com') && (
                          <a 
                            href="https://calendly.com/anand01ts/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#3D5BF1] hover:bg-[#3D5BF1]/90 text-white rounded-lg text-sm font-medium transition-colors w-fit"
                          >
                            Schedule Meeting
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length-1]?.role === 'user' && (
                  <div className="flex justify-start">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Loader2 size={14} className="text-[#3D5BF1] animate-spin" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 rounded-full bg-[#3D5BF1] animate-bounce [animation-delay:-0.3s]" />
                          <div className="w-1 h-1 rounded-full bg-[#3D5BF1] animate-bounce [animation-delay:-0.15s]" />
                          <div className="w-1 h-1 rounded-full bg-[#3D5BF1] animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className={`p-6 border-t border-white/5 bg-white/5 transition-opacity ${view === 'history' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <form onSubmit={handleSubmit} className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Souhardya..."
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 pr-14 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-[#3D5BF1]/50 transition-colors"
              />
            {(isLoading || isTyping) ? (
              <button 
                type="button"
                onClick={handleStop}
                className="absolute right-2 bottom-2 w-10 h-10 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center transition-all border border-red-500/20 group/stop"
                title="Stop responding"
              >
                <Square size={16} fill="currentColor" className="group-hover/stop:scale-110 transition-transform" />
              </button>
            ) : (
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 bottom-2 w-10 h-10 bg-[#3D5BF1] text-white rounded-xl flex items-center justify-center transition-all hover:bg-[#3D5BF1]/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#3D5BF1]/20"
              >
                <Send size={16} />
              </button>
            )}
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-gradient-to-br from-[#3D5BF1] to-[#4361EE] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 active:scale-90 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>
    </div>
  );
}
