import React from 'react';
import { STORY_DATA } from '../data';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-white text-navy-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-black mb-4 tracking-tighter">{STORY_DATA.title}</h2>
            <div className="w-24 h-1 bg-navy-900 mx-auto"></div>
        </div>

        <div className="space-y-32">
            {/* Part 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-navy-900 z-0 group-hover:top-2 group-hover:left-2 transition-all duration-500"></div>
                    <img 
                        src={STORY_DATA.images[0].src} 
                        alt="Kitchen" 
                        className="w-full h-[400px] object-cover grayscale relative z-10 clip-cut shadow-2xl"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <span className="font-jp text-8xl text-navy-900/10 absolute -mt-20 -ml-10 select-none pointer-events-none">伝統</span>
                    <h3 className="text-2xl font-serif font-bold mb-6 tracking-widest uppercase">The Origin</h3>
                    <p className="text-lg leading-loose font-serif text-gray-700">
                        {STORY_DATA.paragraphs[0]}
                    </p>
                </div>
            </div>

             {/* Part 2 */}
             <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="w-full md:w-1/2 relative group">
                    <div className="absolute bottom-4 right-4 w-full h-full bg-navy-900 z-0 group-hover:bottom-2 group-hover:right-2 transition-all duration-500"></div>
                    <img 
                        src={STORY_DATA.images[1].src} 
                        alt="Ingredients" 
                        className="w-full h-[400px] object-cover grayscale relative z-10 clip-cut shadow-2xl border-4 border-white"
                    />
                </div>
                <div className="w-full md:w-1/2 text-right md:text-left">
                     <span className="font-jp text-8xl text-navy-900/10 absolute -mt-20 ml-20 select-none pointer-events-none">平和</span>
                    <h3 className="text-2xl font-serif font-bold mb-6 tracking-widest uppercase md:text-right">The Philosophy</h3>
                    <p className="text-lg leading-loose font-serif text-gray-700 md:text-right">
                        {STORY_DATA.paragraphs[1]}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;