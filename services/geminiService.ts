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

export const getGeminiChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
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
      return "The path is blocked. It seems the API Key is missing. Please ensure 'API_KEY' is set in your environment variables to commune with the Ronin.";
    }

    return "Forgive me, my meditation was interrupted by an unseen force. Please try asking again.";
  }
};