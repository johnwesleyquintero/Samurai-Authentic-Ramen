import React, { useState } from 'react';
import { Flame } from '../icons';
import { MENU_ITEMS } from '../data';
import OrderModal from './OrderModal';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [orderingItem, setOrderingItem] = useState<MenuItem | null>(null);

  return (
    <section className="py-20 md:py-32 bg-paper text-navy-900 min-h-screen relative overflow-hidden">
      {/* Background Kanji Watermarks - Scaled down for mobile */}
      <div className="absolute top-20 left-4 md:left-10 text-[10rem] md:text-[20rem] font-jp font-black text-navy-900/5 select-none pointer-events-none z-0">
        麺
      </div>
      <div className="absolute bottom-40 right-0 text-[10rem] md:text-[20rem] font-jp font-black text-navy-900/5 select-none pointer-events-none z-0">
        味
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black mb-2 tracking-tighter text-navy-900">
              MASTERPIECES
            </h2>
            <p className="text-navy-700 font-sans tracking-[0.2em] uppercase text-xs md:text-sm font-bold">
              Crafted with honor. Served with pride.
            </p>
          </div>
          <div className="h-[2px] w-24 md:w-32 bg-navy-900 mt-6 md:mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group relative">
              {/* Image Container */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden mb-6 bg-navy-900 shadow-2xl clip-cut">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 bg-white text-navy-900 px-4 py-2 text-lg md:text-xl font-serif font-bold z-20 clip-cut">
                  ${item.price}
                </div>
              </div>
              
              {/* Content */}
              <div className="px-2">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-jp text-lg md:text-xl text-gray-400 select-none">
                    {item.japaneseName}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 md:gap-3 mb-4 text-[10px] md:text-xs font-bold uppercase tracking-wider flex-wrap">
                    {item.tags.map(tag => (
                        <span key={tag} className="bg-navy-900 text-white px-2 py-1">{tag}</span>
                    ))}
                    {item.spicyLevel > 0 && (
                        <span className="flex items-center text-red-600 border border-red-600 px-2 py-1">
                            SPICY {item.spicyLevel} <Flame className="w-3 h-3 ml-1 fill-current" />
                        </span>
                    )}
                </div>
                
                <p className="text-navy-800/80 mb-6 font-sans leading-relaxed text-sm h-auto md:h-16 line-clamp-3">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => setOrderingItem(item)}
                  className="w-full py-3 md:py-4 border border-navy-900 text-navy-900 font-bold tracking-[0.2em] hover:bg-navy-900 hover:text-white transition-all duration-300 uppercase text-xs"
                >
                  Order Bowl
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <OrderModal 
        isOpen={!!orderingItem} 
        item={orderingItem} 
        onClose={() => setOrderingItem(null)} 
      />
    </section>
  );
};

export default Menu;