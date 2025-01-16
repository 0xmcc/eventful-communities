import { callOpenAI } from './openai';

interface StyleAnalysis {
  isStyleRequest: boolean;
}

const STYLE_KEYWORDS = [
  'style', 'theme', 'color', 'design', 'look',
  'dark', 'light', 'modern', 'background',
  'bigger', 'smaller', 'wider', 'narrower',
  'padding', 'margin', 'layout', 'i want'
];

/**
 * Analyzes if a message is requesting style changes
 */
export const analyzeStyleRequest = async (message: string): Promise<StyleAnalysis> => {
  const lowerMessage = message.toLowerCase();
  
  // Quick keyword check for obvious style requests
  if (STYLE_KEYWORDS.some(keyword => lowerMessage.includes(keyword))) {
    return { isStyleRequest: true };
  }

  try {
    const systemPrompt = `You are a style request analyzer. Determine if the user is asking for UI/style changes.
    Respond with only: { "isStyleRequest": boolean }`;

    const response = await callOpenAI([
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ]);
    console.log('Style analysis response:', response);

    return JSON.parse(response);
  } catch (error) {
    console.error('Style analysis error:', error);
    // Default to false if analysis fails
    return { isStyleRequest: false };
  }
}; 