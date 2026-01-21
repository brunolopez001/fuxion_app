import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

// Inicializar el cliente de Gemini con process.env.API_KEY (inyectado por Vite)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    // Preparar el contenido incluyendo el historial para el contexto
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Añadir el nuevo mensaje del usuario
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: contents,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tuve un problema técnico momentáneo. ¿Podrías intentar de nuevo?";
  }
};