import { analyzeChatMessage } from './analyzer';
import { generateChatResponse, type ChatResponse } from './response';

/**
 * Process the chat message and return the AI response
 * @param message - The chat message to process
 * @returns The AI response ChatResponse object: message, styles, originalPrompt, isStyleRequest
 * 
 */
export const handleChatMessage = async (
  message: string,
  onChunk?: (chunk: string) => void
): Promise<ChatResponse> => {
  try {
    // 1. Analyze the message to determine if a style request is made
    const analysis = await analyzeChatMessage(message);
    // 2. Generate AI chat response - where both styles and message are generated
    const aiMessage = await generateChatResponse(
      message, 
      analysis.hasStyleRequest,
      onChunk
    );
//    console.log("AI generated styles", aiMessage.styles);

    // 4. Return complete response
    return aiMessage;
  } catch (error) {
    console.error('Chat service error:', error);
    throw new Error('Failed to process chat message');
  }
};