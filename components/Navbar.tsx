import React, { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'menu', label: 'The Menu' },
    { id: 'concierge', label: 'Ramen Ronin' },
    { id: 'story', label: 'Our Story' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('hero')}>
            <UtensilsCrossed className="h-8 w-8 mr-3 text-white" />
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-widest font-bold uppercase">Samurai</span>
              <span className="text-xs tracking-[0.3em] text-gray-400">Authentic Ramen</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors duration-300 ${
                    currentSection === link.id
                      ? 'text-white bg-white/10 border border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium border-l-4 ${
                  currentSection === link.id
                    ? 'border-white bg-navy-800 text-white'
                    : 'border-transparent text-gray-300 hover:bg-navy-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
