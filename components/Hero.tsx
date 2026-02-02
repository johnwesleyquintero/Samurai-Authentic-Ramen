import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Ramen Background" 
          className="w-full h-full object-cover opacity-40 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>
        {/* Retro scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto border-y-4 border-white py-12 bg-navy-900/60 backdrop-blur-sm">
        <p className="font-sans text-lg md:text-xl tracking-[0.5em] uppercase mb-4 text-gray-300">
          Established 2024
        </p>
        <h1 className="font-serif text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white">
          <span className="block text-2xl md:text-4xl font-normal mb-2 tracking-widest text-gray-400">The Way of</span>
          RAMEN
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          "A bowl of soul, forged in fire and broth."
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button 
            onClick={onOrderClick}
            className="px-10 py-4 bg-white text-navy-900 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all border-2 border-white"
          >
            View The Menu
          </button>
          <button 
             onClick={() => {
                const concierge = document.getElementById('concierge');
                concierge?.scrollIntoView({ behavior: 'smooth' });
             }}
            className="px-10 py-4 bg-transparent text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all border-2 border-white"
          >
            Ask The Ronin
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-10 h-10 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
