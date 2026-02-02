import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Sword } from 'lucide-react';
import { sendMessageToRonin } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Greetings, traveler. I am the Ramen Ronin. My blade is sharp, but my broth is sharper. How may I guide your appetite today?', 
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
    <section className="py-24 bg-navy-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-pattern-waves opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-4 border border-white/20">
                <Sword className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-2">The Ramen Ronin</h2>
            <p className="text-gray-400">Consult our AI master for the perfect bowl.</p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-2xl flex flex-col h-[600px]">
          
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-700 border border-white/30 flex items-center justify-center mr-3">
                    <Sword className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-white text-navy-900 rounded-tr-none' 
                    : 'bg-navy-800 text-gray-200 border border-white/10 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ml-3">
                    <User className="w-5 h-5 text-navy-900" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start justify-start animate-pulse">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-700 border border-white/30 flex items-center justify-center mr-3">
                  <Sword className="w-5 h-5 text-white" />
                </div>
                <div className="bg-navy-800 text-gray-400 p-4 rounded-lg rounded-tl-none text-sm border border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-navy-950/80 border-t border-white/10">
            <form onSubmit={handleSend} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the master: 'I want something spicy' or 'I am very hungry'..."
                className="flex-1 bg-navy-800 text-white placeholder-gray-500 border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-sans"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-white text-navy-900 px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;
