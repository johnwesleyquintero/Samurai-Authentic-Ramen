import { MenuItem } from './types';

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'menu', label: 'The Menu' },
  { id: 'concierge', label: 'Ramen Ronin' },
  { id: 'story', label: 'Our Story' },
];

export const HERO_DATA = {
  established: "Established 2024",
  subtitle: "The Way of",
  title: "RAMEN",
  quote: "\"A bowl of soul, forged in fire and broth.\"",
  bgImage: "https://picsum.photos/id/431/1920/1080"
};

export const MENU_ITEMS: MenuItem[] = [
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

export const AI_CONFIG = {
  initialMessage: "Greetings, traveler. I am the Ramen Ronin. My blade is sharp, but my broth is sharper. How may I guide your appetite today?",
  systemInstructionBase: `You are the "Ramen Ronin", a wise and ancient samurai master who now dedicates his life to the art of Ramen. 
Your tone is honorable, stoic, yet welcoming. You use metaphors related to swordsmanship, nature, bushido, and Japanese history.
You are a concierge for "Samurai Authentic Ramen".

Your goal is to recommend ramen dishes to customers based on their mood, hunger level, or flavor preferences.
Always recommend items from this specific menu:
`
};

export const STORY_DATA = {
  title: "Our Legend",
  paragraphs: [
    "Centuries ago, warriors found solace in the warmth of broth after battle. Today, we honor that tradition. Every noodle is cut with precision, every soup simmered with patience.",
    "At Samurai Authentic Ramen, we believe that a meal is not just sustenance—it is a moment of peace in a chaotic world. The retro aesthetic of our shop pays homage to the Showa era, blending the ancient way of the samurai with the golden age of Japanese modernization."
  ],
  images: [
    { src: "https://picsum.photos/id/225/400/300", alt: "Kitchen" },
    { src: "https://picsum.photos/id/338/400/300", alt: "Ingredients" }
  ]
};

export const FOOTER_DATA = {
  brand: {
    name: "SAMURAI",
    description: "Authentic flavors inspired by the discipline of the warrior. We bring the spirit of traditional Japanese ramen to the modern world."
  },
  contact: {
    address: "123 Bushido Blvd, Kyoto District",
    phone: "+1 (555) 000-0000",
    hours: "Mon-Sun: 11:00 AM - 10:00 PM"
  },
  social: {
    newsletterTitle: "Join the Clan",
    newsletterDesc: "Subscribe for exclusive offers and updates. Managed by your favorite Social Media team."
  },
  copyright: "© 2024 SAMURAI AUTHENTIC RAMEN. ALL RIGHTS RESERVED."
};
