import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AIConcierge from './components/AIConcierge';
import Story from './components/Story';
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
    <div className="min-h-screen bg-navy-900 text-white font-sans selection:bg-white selection:text-navy-900 overflow-x-hidden">
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

        <Story />
      </main>

      <Footer />
    </div>
  );
};

export default App;