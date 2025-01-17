import { STYLE_GENERATION_PROMPT } from '@/config/aiPrompts';

export const prepareRequestBody = (prompt: string, stream: boolean = false, systemPrompt: string = STYLE_GENERATION_PROMPT) => {
  return {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 2000,
    stream: stream
  };
}; 