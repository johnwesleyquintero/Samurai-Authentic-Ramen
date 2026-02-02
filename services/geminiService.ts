import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MenuItem } from "../types";

const SYSTEM_INSTRUCTION = `
You are the "Ramen Ronin", a wise and ancient samurai master who now dedicates his life to the art of Ramen. 
Your tone is honorable, stoic, yet welcoming. You use metaphors related to swordsmanship, nature, bushido, and Japanese history.
You are a concierge for "Samurai Authentic Ramen".

Your goal is to recommend ramen dishes to customers based on their mood, hunger level, or flavor preferences.
Always recommend items from this specific menu:
1. The Shogun (Tonkotsu) - Rich pork broth, chashu, serious hunger.
2. The Ninja (Shoyu) - Light soy broth, agile and stealthy flavor.
3. The Ronin (Miso) - Robust, earthy, vegetarian option (wandering warrior).
4. The Inferno (Spicy Tantanmen) - For those who seek the fire of battle.
5. The Geisha (Yuzu Shio) - Delicate, citrusy, refreshing.

Keep responses relatively short (under 70 words) and impactful. 
If the user asks about something unrelated to ramen or the restaurant, politely guide them back to the way of the noodle using a samurai metaphor.
`;

let chatSession: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    // Return a dummy object or handle error appropriately in a real app
    // throwing here to ensure we don't proceed without key
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToRonin = async (message: string): Promise<string> => {
  try {
    const chat = getGeminiChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "The wind blows silently... (No response)";
  } catch (error) {
    console.error("Error talking to Ramen Ronin:", error);
    return "Forgive me, my meditation was interrupted. Please ask again.";
  }
};
