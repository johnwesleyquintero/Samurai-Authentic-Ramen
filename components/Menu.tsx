import React from 'react';
import { MenuItem } from '../types';
import { Flame, Leaf } from 'lucide-react';

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'The Shogun',
    japaneseName: '将軍',
    description: 'Our signature Tonkotsu. Rich 20-hour pork bone broth, tender chashu belly, kikurage mushrooms, and a seasoned egg.',
    price: 18,
    image: 'https://picsum.photos/id/292/600/400',
    spicyLevel: 1,
    tags: ['Bestseller', 'Rich'],
  },
  {
    id: '2',
    name: 'The Ninja',
    japaneseName: '忍者',
    description: 'Classic Tokyo-style Shoyu. Clear chicken and soy broth, bamboo shoots, naruto fish cake, and roast pork.',
    price: 16,
    image: 'https://picsum.photos/id/490/600/400',
    spicyLevel: 0,
    tags: ['Light', 'Classic'],
  },
  {
    id: '3',
    name: 'The Inferno',
    japaneseName: '地獄',
    description: 'Spicy Tantanmen with minced pork, chili oil, sesame paste, and bok choy. A warrior\'s challenge.',
    price: 19,
    image: 'https://picsum.photos/id/600/600/400',
    spicyLevel: 5,
    tags: ['Spicy'],
  },
  {
    id: '4',
    name: 'The Ronin',
    japaneseName: '浪人',
    description: 'Rich Miso broth with buttered corn, bean sprouts, and tofu. A robust flavor for the wandering soul.',
    price: 17,
    image: 'https://picsum.photos/id/40/600/400',
    spicyLevel: 2,
    tags: ['Vegetarian Option'],
  },
  {
    id: '5',
    name: 'The Geisha',
    japaneseName: '芸者',
    description: 'Yuzu Shio ramen. A delicate salt broth infused with citrus yuzu, topped with grilled chicken and greens.',
    price: 18,
    image: 'https://picsum.photos/id/493/600/400',
    spicyLevel: 0,
    tags: ['Refreshing'],
  },
];

const Menu: React.FC = () => {
  return (
    <section className="py-24 bg-white text-navy-900 min-h-screen relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -ml-48 -mb-48 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tighter">Masterpieces</h2>
          <div className="h-1 w-24 bg-navy-900 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans tracking-wide uppercase text-sm">
            Crafted with honor. Served with pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group bg-paper shadow-xl border-2 border-navy-900 transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden border-b-2 border-navy-900">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-navy-900 text-white px-3 py-1 text-sm font-serif font-bold">
                  ${item.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-navy-900">{item.name}</h3>
                    <p className="text-gray-400 font-serif text-sm">{item.japaneseName}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                     {item.spicyLevel > 0 && (
                        <div className="flex items-center text-red-600" title={`Spicy Level: ${item.spicyLevel}`}>
                            {[...Array(item.spicyLevel)].map((_, i) => (
                                <Flame key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                     )}
                     {item.tags.includes('Vegetarian Option') && (
                         <Leaf className="w-5 h-5 text-green-600" title="Vegetarian Option" />
                     )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 font-sans leading-relaxed text-sm h-20 overflow-hidden">
                  {item.description}
                </p>
                
                <button className="w-full py-3 bg-navy-900 text-white font-bold tracking-widest hover:bg-white hover:text-navy-900 border-2 border-navy-900 transition-colors uppercase text-sm">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
