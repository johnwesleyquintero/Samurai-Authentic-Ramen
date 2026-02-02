import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sword, Sparkles } from '../icons';
import { sendMessageToRonin } from '../services/geminiService';
import { ChatMessage } from '../types';
import { AI_CONFIG } from '../data';

const AIConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: AI_CONFIG.initialMessage, 
      timestamp: Date.now() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToRonin(userMessage.text);

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden border-t border-white/10">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800/40 via-navy-950 to-navy-950 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
            <div className="inline-flex items-center justify-center p-4 rounded-full border border-white/10 mb-6 bg-navy-900/50 backdrop-blur">
                <Sword className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-3 tracking-tight">
              THE RAMEN RONIN
            </h2>
            <p className="text-blue-200/60 font-mono text-xs tracking-widest uppercase">
              // AI Powered Culinary Master //
            </p>
        </div>

        {/* Terminal Container */}
        <div className="bg-navy-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[700px] relative">
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50"></div>
          
          {/* Header Bar */}
          <div className="bg-navy-950/80 border-b border-white/10 p-3 flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-wider relative z-10">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="ml-auto">Connection: Secure</span>
            <span className="text-green-500">● Online</span>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide relative z-10">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <span className="font-serif font-bold text-xl text-white">侍</span>
                  </div>
                )}
                
                <div className={`max-w-[80%] md:max-w-[70%] p-6 rounded-sm text-sm leading-7 shadow-lg backdrop-blur-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-navy-900 font-sans' 
                    : 'bg-navy-800/80 border border-white/10 text-blue-100 font-serif'
                }`}>
                    {msg.role === 'model' && (
                        <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-sans">Ronin Response</div>
                    )}
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-navy-900 border-2 border-white/50">
                    <User className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-xl text-white">侍</span>
                  </div>
                <div className="bg-navy-800/50 border border-white/5 p-6 rounded-sm text-blue-200">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    Sharpening Blade...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-navy-950 border-t border-white/10 relative z-10">
            <form onSubmit={handleSend} className="flex gap-0 border border-white/20 rounded-sm overflow-hidden bg-navy-900/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for guidance..."
                className="flex-1 bg-transparent text-white placeholder-gray-600 px-6 py-4 focus:outline-none font-mono text-sm"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-white text-navy-900 px-8 py-4 font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;