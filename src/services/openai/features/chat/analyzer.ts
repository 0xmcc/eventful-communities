import { isStyleRequest } from '@/services/openai/features/styles/analyzer';

/**
 * MessageAnalysis interface to store the result of the message analysis
 */
export interface MessageAnalysis {
    hasStyleRequest: boolean;
    prompt: string;
}
  
export const analyzeChatMessage = async (
    message: string
): Promise<MessageAnalysis> => {
    try {
        const hasStyleRequest = await isStyleRequest(message);
        
        return {
            hasStyleRequest,
            prompt: message
        };
    } catch (error) {
        console.error('❌ Message classification error:', error);
        return {
            hasStyleRequest: false,
            prompt: message
        };
    }
};