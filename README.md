# Samurai Authentic Ramen 🍜⚔️

A modern, retro-styled single-page website for "Samurai Authentic Ramen", designed to capture the essence of traditional Japanese flavors with a digital twist.

This project was built for the restaurant's marketing and ad campaigns, featuring an AI-powered concierge to guide customers through the menu.

## 🌟 Features

*   **Ramen Ronin AI Concierge**: An interactive chat interface powered by **Google Gemini API** (`gemini-3-flash-preview`). The "Ramen Ronin" persona helps customers choose dishes based on their mood and hunger.
*   **Retro Japanese Aesthetic**: A clean navy blue, white, and black color palette inspired by traditional samurai armor and calligraphy.
*   **Dynamic Menu**: A responsive grid layout showcasing the signature ramen bowls.
*   **Responsive Design**: Fully optimized for mobile and desktop devices using **Tailwind CSS**.

## 🛠️ Tech Stack

*   **Framework**: React 19
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **AI/LLM**: Google Gemini API (@google/genai)
*   **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

To fully utilize the "Ramen Ronin" chat feature, a valid Google Gemini API Key is required.

### Environment Setup

The application connects to the Google Gemini API using the environment variable:

`process.env.API_KEY`

### File Structure

*   `components/`: UI components (Hero, Menu, AIConcierge, etc.)
*   `services/`: Integration with Google Gemini API (`geminiService.ts`).
*   `index.html`: Entry point with import maps for React and Tailwind config.

## 🎨 Design Concept

*   **Theme**: Samurai / Retro Ramen Shop
*   **Colors**: Navy Blue (`#001f3f`), White, Black.
*   **Fonts**: 'Cinzel' (Headers), 'Jost' (Body).

## 🤖 AI Persona: The Ramen Ronin

The AI is prompted to act as a wise, ancient samurai master. It uses metaphors related to swordsmanship and nature to recommend specific items from the menu (The Shogun, The Ninja, etc.).

---

*Managed by the Samurai Ramen Social Media Team*
