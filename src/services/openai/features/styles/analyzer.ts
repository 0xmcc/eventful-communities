
import { makeOpenAIRequest } from '@/services/openai/core/client';

const STYLE_KEYWORDS = [
  'style', 'theme', 'color', 'design', 'look',
  'dark', 'light', 'modern', 'background',
  'bigger', 'smaller', 'wider', 'narrower',
  'padding', 'margin', 'layout', 'i want'
];


/**
 * Determines if a message is requesting style changes
 * @param message - The user's message to analyze
 * @returns True if the message is requesting style changes
 */
export const isStyleRequest = async (message: string): Promise<boolean> => {
  const lowerMessage = message.toLowerCase();
  
  // Quick keyword check for obvious style requests
  if (STYLE_KEYWORDS.some(keyword => lowerMessage.includes(keyword))) {
    return true;
  }
  const systemPrompt = `You are a style request analyzer. Your task is to determine if the user is asking for UI/style changes.
  You must respond with ONLY the word 'true' or 'false' - no punctuation, no explanation.
  Example responses:
  true
  false`;   

  try {

    const response = await makeOpenAIRequest({ 
      prompt: message,
      stream: false,
      systemPrompt: systemPrompt
    });

    console.log("Style analysis response", response);
    return response.trim().toLowerCase() === 'true';
  } catch (error) {
    console.error('Style analysis error:', error);
    return false;
  }
}; 

//const SYSTEM_PROMPT = `You are a style request analyzer. Determine if the user is asking for UI/style changes.
//Respond with only: { "isStyleRequest": boolean }`;
