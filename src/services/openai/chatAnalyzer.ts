import { ChatAnalysis } from './types';
import { analyzeStyleRequest } from './styleAnalyzer';
import { getChatResponse } from './chatResponse';

export const analyzeChatMessage = async (
  message: string,
): Promise<ChatAnalysis> => {
  console.log('🚀 Starting chat analysis:', message);
  try {
    const styleAnalysis = await analyzeStyleRequest(message);
    console.log('📝 Style analysis complete:', styleAnalysis);

    if (styleAnalysis.isStyleRequest) {
      // Get chat response
      const chatResponse = await getChatResponse(message, true);
      
      // Return routing information only
      return {
        isStyleRequest: true,
        stylePrompt: message, // Pass the original message as the style prompt
        response: chatResponse
      };
    }

    const response = await getChatResponse(message, false);
    return {
      isStyleRequest: false,
      response
    };

  } catch (error) {
    console.error('❌ Chat analysis error:', error);
    return {
      isStyleRequest: false,
      response: "🤔 Hmm, I got a bit tangled up there. Let's talk about styling - that's my favorite topic!"
    };
  }
}; 