import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini Client
// WARNING: In a real production app, ensure API keys are not exposed in client-side code unless using appropriate restrictions.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "Error: API Key de Google no configurada. Por favor contacte al administrador.";
    }

    // Prepare contents including history for context
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add new message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const model = 'gemini-2.5-flash-lite-latest'; // Fast model for chat

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tuve un problema técnico momentáneo. ¿Podrías intentar de nuevo?";
  }
};
