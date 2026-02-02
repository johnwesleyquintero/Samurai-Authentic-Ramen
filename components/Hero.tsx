import React from 'react';
import { ChevronDown } from '../icons';
import { HERO_DATA } from '../data';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_DATA.bgImage}
          alt="Ramen Background" 
          className="w-full h-full object-cover object-center opacity-50 grayscale scale-110 motion-safe:animate-[mist_60s_linear_infinite]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Vertical Text - Hidden on mobile */}
      <div className="absolute top-24 right-4 md:right-12 z-10 hidden md:block opacity-30 select-none">
        <div className="writing-vertical font-jp font-black text-8xl md:text-9xl tracking-widest text-white/10">
          侍ラーメン
        </div>
      </div>

      <div className="relative z-20 px-4 md:px-12 lg:px-24 max-w-7xl w-full pt-20 md:pt-0">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-[2px] w-8 md:w-12 bg-white/50"></div>
            <p className="font-sans text-xs md:text-base tracking-[0.4em] uppercase text-gray-300">
              {HERO_DATA.established}
            </p>
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
            <span className="block text-2xl md:text-4xl font-light mb-2 tracking-[0.2em] text-gray-400 font-sans italic">
              {HERO_DATA.subtitle}
            </span>
            {HERO_DATA.title}
          </h1>

          <p className="font-serif italic text-lg md:text-3xl text-gray-200 mb-8 md:mb-12 max-w-xl border-l-4 border-white pl-4 md:pl-6 py-2">
            {HERO_DATA.quote}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
            <button 
              onClick={onOrderClick}
              className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-navy-900 font-bold uppercase tracking-widest transition-all hover:bg-gray-100 clip-cut text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Menu
              </span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </button>

            <button 
               onClick={() => {
                  const concierge = document.getElementById('concierge');
                  concierge?.scrollIntoView({ behavior: 'smooth' });
               }}
              className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-navy-800/50 backdrop-blur-sm text-white font-bold uppercase tracking-widest transition-all border border-white/30 hover:bg-navy-800 clip-cut text-center"
            >
              <span className="relative z-10">Ask The Ronin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans">Scroll</span>
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;