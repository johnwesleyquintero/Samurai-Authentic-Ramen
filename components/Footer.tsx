import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-4">SAMURAI</h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Authentic flavors inspired by the discipline of the warrior. 
              We bring the spirit of traditional Japanese ramen to the modern world.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold mb-6 tracking-wider">VISIT US</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>123 Bushido Blvd, Kyoto District</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social Manager Corner */}
          <div className="bg-navy-800 p-6 border border-white/10">
            <h4 className="text-lg font-serif font-bold mb-4 text-white">Join the Clan</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive offers and updates. Managed by your favorite Social Media team.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-navy-900 border border-white/20 text-white px-4 py-2 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-navy-900 font-bold py-2 hover:bg-gray-200 transition-colors uppercase text-sm">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-gray-500 font-sans tracking-widest">
          &copy; 2024 SAMURAI AUTHENTIC RAMEN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
