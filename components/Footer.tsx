import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from '../icons';
import { FOOTER_DATA } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/5 relative overflow-hidden">
        {/* Giant Watermark */}
        <div className="absolute right-0 bottom-0 text-[15rem] leading-none font-jp font-black text-white/5 pointer-events-none select-none z-0">
            侍
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-6">
            <div className="flex flex-col">
                 <h3 className="text-4xl font-serif font-black tracking-tighter">{FOOTER_DATA.brand.name}</h3>
                 <span className="text-xs tracking-[0.4em] text-gray-500 uppercase">Authentic Ramen</span>
            </div>
           
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {FOOTER_DATA.brand.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-sans font-bold mb-8 tracking-[0.2em] text-gray-500">VISIT US</h4>
            <ul className="space-y-6 text-gray-300 font-serif">
              <li className="flex items-start justify-center md:justify-start group">
                <MapPin className="w-5 h-5 mr-4 flex-shrink-0 text-gray-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{FOOTER_DATA.contact.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start group">
                <Phone className="w-5 h-5 mr-4 flex-shrink-0 text-gray-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{FOOTER_DATA.contact.phone}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start group">
                <Clock className="w-5 h-5 mr-4 flex-shrink-0 text-gray-500 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{FOOTER_DATA.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-navy-900/50 backdrop-blur-sm p-8 border border-white/10 clip-cut">
            <h4 className="text-xl font-serif font-bold mb-2 text-white">{FOOTER_DATA.social.newsletterTitle}</h4>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              {FOOTER_DATA.social.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-navy-950 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors text-sm font-sans"
              />
              <button className="bg-white text-navy-900 font-bold py-3 hover:bg-gray-200 transition-colors uppercase text-xs tracking-widest">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-widest uppercase">
          <span>{FOOTER_DATA.copyright}</span>
          <span className="mt-2 md:mt-0 opacity-50">Designed by Ronin AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;