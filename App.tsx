import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AIConcierge from './components/AIConcierge';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  // Update current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'concierge', 'story'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans selection:bg-white selection:text-navy-900">
      <Navbar currentSection={currentSection} onNavigate={scrollToSection} />
      
      <main>
        <div id="hero">
          <Hero onOrderClick={() => scrollToSection('menu')} />
        </div>
        
        <div id="menu">
          <Menu />
        </div>

        <div id="concierge">
          <AIConcierge />
        </div>

        <div id="story" className="py-24 bg-white text-navy-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-serif font-bold mb-8">Our Legend</h2>
             <div className="h-1 w-24 bg-navy-900 mx-auto mb-8"></div>
             <p className="text-lg leading-loose font-serif text-gray-600 mb-8">
               Centuries ago, warriors found solace in the warmth of broth after battle. 
               Today, we honor that tradition. Every noodle is cut with precision, every soup simmered with patience.
               <br/><br/>
               At Samurai Authentic Ramen, we believe that a meal is not just sustenance—it is a moment of peace in a chaotic world.
               The retro aesthetic of our shop pays homage to the Showa era, blending the ancient way of the samurai with the 
               golden age of Japanese modernization.
             </p>
             <div className="grid grid-cols-2 gap-4 mt-12">
                <img src="https://picsum.photos/id/225/400/300" alt="Kitchen" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <img src="https://picsum.photos/id/338/400/300" alt="Ingredients" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
