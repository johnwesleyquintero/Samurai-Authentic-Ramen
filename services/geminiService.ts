import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MenuItem } from "../types";
import { MENU_ITEMS, AI_CONFIG } from "../data";

const generateSystemInstruction = () => {
  const menuList = MENU_ITEMS.map((item, index) => 
    `${index + 1}. ${item.name} (${item.japaneseName}) - ${item.description}`
  ).join('\n');

  return `${AI_CONFIG.systemInstructionBase}

${menuList}

Keep responses relatively short (under 70 words) and impactful. 
If the user asks about something unrelated to ramen or the restaurant, politely guide them back to the way of the noodle using a samurai metaphor.
`;
};

let chatSession: Chat | null = null;

const getApiKey = (): string | undefined => {
  // 1. Try Vite (import.meta.env)
  // This is the standard way to access env vars in Vite
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
       // @ts-ignore
       if (import.meta.env.VITE_API_KEY) return import.meta.env.VITE_API_KEY;
       // @ts-ignore
       if (import.meta.env.API_KEY) return import.meta.env.API_KEY;
    }
  } catch (e) {
    // Ignore errors in non-module environments
  }

  // 2. Try Process (Next.js / CRA / Standard Node)
  // We check typeof process to avoid ReferenceError in browsers that don't polyfill it
  try {
    if (typeof process !== 'undefined' && process.env) {
       if (process.env.API_KEY) return process.env.API_KEY;
       if (process.env.NEXT_PUBLIC_API_KEY) return process.env.NEXT_PUBLIC_API_KEY;
       if (process.env.REACT_APP_API_KEY) return process.env.REACT_APP_API_KEY;
       // Fallback if some bundler maps VITE_ to process.env
       if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
    }
  } catch (e) {
    // Ignore errors
  }
  
  return undefined;
}

export const getGeminiChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = getApiKey();

  if (!apiKey) {
    console.error("API_KEY is missing. Please check your environment variables.");
    console.error("For Vite/Vercel: Ensure 'VITE_API_KEY' is set in your project settings.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: generateSystemInstruction(),
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
  } catch (error: any) {
    console.error("Error talking to Ramen Ronin:", error);
    
    // Handle missing API Key specifically
    if (error.message === "API Key missing") {
      return "The path is blocked. It seems the API Key is missing. Please ensure 'VITE_API_KEY' is set in your Vercel/Environment variables.";
    }

    return "Forgive me, my meditation was interrupted by an unseen force. Please try asking again.";
  }
};