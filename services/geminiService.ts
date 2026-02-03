
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTutorCoaching = async (userInput: string, context: string = "general") => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `User Speech: "${userInput}"\nContext: ${context}`,
    config: {
      systemInstruction: `
        Role: You are 'LingoFace', an elite AI tutor for adult foreign language learners.
        Goal: Analyze user speech and emotion, provide real-time sync, and pinpoint coaching.
        
        Rules:
        1. Emotion Sync: Acknowledge user's state (e.g., nervous, hesitant, confident) and respond with empathy.
        2. Nuance Filter: Provide a natural native correction. Move away from literal translation.
        3. Pinpoint Coaching: Offer one specific pedagogical tip.
        4. Context: If context is professional (Legal/Medical), use appropriate jargon.
        
        Output MUST be in valid JSON format.
      `,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          emotionSync: { type: Type.STRING, description: "Empathetic response based on tone" },
          original: { type: Type.STRING, description: "The original user input" },
          correction: { type: Type.STRING, description: "The corrected natural phrase" },
          explanation: { type: Type.STRING, description: "Why the correction is better" },
          coachingPoint: { type: Type.STRING, description: "A specific learning tip" }
        },
        required: ["emotionSync", "original", "correction", "explanation", "coachingPoint"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
