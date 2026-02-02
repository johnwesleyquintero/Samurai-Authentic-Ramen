export interface MenuItem {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  price: number;
  image: string;
  spicyLevel: number; // 0-5
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
