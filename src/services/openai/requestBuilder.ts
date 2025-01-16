import { STYLE_GENERATION_PROMPT } from '@/config/aiPrompts';

export const prepareRequestBody = (prompt: string) => {
  return JSON.stringify({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: STYLE_GENERATION_PROMPT
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 2000,
    stream: true
  });
}; 