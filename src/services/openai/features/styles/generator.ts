import { makeOpenAIRequest } from '@/services/openai/core/client';

/**
 * Parameters for generating AI styles with streaming support
 * @property prompt - The text description of styles to generate
 * @property onChunk - Optional callback to handle streaming response chunks
 */
export interface OpenAIStreamParams {
  prompt: string;
  onChunk?: (chunk: string) => void;
}


/**
 * Generates styles using OpenAI's API with streaming support
 * @returns Promise resolving to the complete style generation response
 */
export const generateStylesWithAI = async ({ prompt, onChunk }: OpenAIStreamParams): Promise<string> => {
  try {
    if (!prompt.trim()) { throw new Error("Please provide a style description");  }
      
    const result = await makeOpenAIRequest(prompt, { stream: true, onChunk });    
    console.log('Accumulated JSON:', result);
    return result;

  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown): never => {
  if (error instanceof Error) {
    throw new Error(`Style Generation Error: ${error.message}`);
  }
  throw new Error("An unknown error occurred while generating styles");
};

// Export the types from the parent directory
export * from '@/services/openai/types';