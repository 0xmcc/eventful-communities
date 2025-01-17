import { makeOpenAIRequest } from '../../core/client';
import { generateStylesWithAI } from '../styles/generator';

export interface ChatResponse {
  message: string;      // AI's chat message
  styles?: string;      // Generated styles (if style request)
  originalPrompt: string;
  isStyleRequest: boolean;
}

export const generateChatResponse = async (
  message: string,
  hasStyleRequest: boolean,
  onChunk?: (chunk: string) => void
): Promise<ChatResponse> => {
  let styles: string | undefined;
  const systemPrompt = hasStyleRequest 
    ? `You are a playful UI design assistant. If the user requests a specific theme (like SpongeBob),
       respond in that character's style. Always confirm the style changes have been applied and 
       encourage them to explore the rest of the app. Keep responses fun and thematic!
       
       Examples:
       - SpongeBob theme: "Aye aye captain! I've jazzed up your theme with some Bikini Bottom magic! 🍍"
       - Cyberpunk theme: "NEURAL LINK ESTABLISHED... Theme matrix successfully reconfigured with neon-charged upgrades! 🤖"
       - Fairy tale theme: "✨ With a wave of my wand, your theme has been enchanted! Take a peek at the magical transformation ✨"`
    : `You are a friendly UI/UX assistant who loves discussing design. Keep responses helpful, 
       engaging, and occasionally playful. Feel free to use relevant emojis and maintain an upbeat tone.`;

    if (hasStyleRequest) {
      console.log("Generating styles", hasStyleRequest);
      styles = await generateStylesWithAI({ 
        prompt: message,
        onChunk
      });
//      console.log("Styles generated", styles);
    }
    
    console.log("Generating AI message", message);
    const aiMessage = await makeOpenAIRequest({ 
        prompt: message,
        stream: false,
        systemPrompt
    });
    console.log("AI message generated", aiMessage);
  return {
    message: aiMessage,
    originalPrompt: message,
    isStyleRequest: hasStyleRequest,
    styles: hasStyleRequest ? styles : undefined
  };
};