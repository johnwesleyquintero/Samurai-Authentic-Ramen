import React from 'react';
import { ChevronDown } from '../icons';
import { HERO_DATA } from '../data';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-navy-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_DATA.bgImage}
          alt="Ramen Background" 
          className="w-full h-full object-cover opacity-50 grayscale scale-110 motion-safe:animate-[mist_60s_linear_infinite]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Vertical Text */}
      <div className="absolute top-24 right-4 md:right-12 z-10 hidden md:block opacity-30 select-none">
        <div className="writing-vertical font-jp font-black text-8xl md:text-9xl tracking-widest text-white/10">
          侍ラーメン
        </div>
      </div>

      <div className="relative z-20 px-6 md:px-12 lg:px-24 max-w-7xl w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-white/50"></div>
            <p className="font-sans text-sm md:text-base tracking-[0.4em] uppercase text-gray-300">
              {HERO_DATA.established}
            </p>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
            <span className="block text-3xl md:text-4xl font-light mb-2 tracking-[0.2em] text-gray-400 font-sans italic">
              {HERO_DATA.subtitle}
            </span>
            {HERO_DATA.title}
          </h1>

          <p className="font-serif italic text-xl md:text-3xl text-gray-200 mb-12 max-w-xl border-l-4 border-white pl-6 py-2">
            {HERO_DATA.quote}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onOrderClick}
              className="group relative px-10 py-5 bg-white text-navy-900 font-bold uppercase tracking-widest transition-all hover:bg-gray-100 clip-cut"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Menu
              </span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </button>

            <button 
               onClick={() => {
                  const concierge = document.getElementById('concierge');
                  concierge?.scrollIntoView({ behavior: 'smooth' });
               }}
              className="group relative px-10 py-5 bg-navy-800/50 backdrop-blur-sm text-white font-bold uppercase tracking-widest transition-all border border-white/30 hover:bg-navy-800 clip-cut"
            >
              <span className="relative z-10">Ask The Ronin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-[0.3em] font-sans">Scroll</span>
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;