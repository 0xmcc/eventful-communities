import { supabase } from '@/integrations/supabase/client';
import { STYLE_GENERATION_PROMPT } from '@/config/aiPrompts';
import { OpenAIStreamParams } from './types';

interface OpenAIResponse {
  choices: Array<{
    delta?: {
      content?: string;
    };
    message?: {
      content: string;
    };
  }>;
}

interface StylePrompt {
  elements: {
    name: string;
    description: string;
  }[];
  customInstructions?: string;
}


export const generateStylesWithAI = async (
  prompt: string, 
  onChunk?: (chunk: string) => void
): Promise<string> => {
  try {
    if (!prompt.trim()) {
      throw new Error("Please provide a style description");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
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
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to connect to OpenAI API");
    }

    const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
    if (!reader) throw new Error("Failed to get response reader");

    let accumulatedJSON = "";
    let isComplete = false;
    let openBraces = 0;
    let closeBraces = 0;

    while (!isComplete) {
      const { value, done } = await reader.read();
      if (done) break;

      const lines = value.split('\n');
      for (const line of lines) {
        if (line.length === 0) continue;
        if (line.startsWith(':')) continue;
        if (line === 'data: [DONE]') {
          isComplete = true;
          break;
        }

        try {
          const json = JSON.parse(line.substring(6)) as OpenAIResponse;
          const content = json.choices[0]?.delta?.content || '';
          
          // Count braces to track JSON completion
          for (const char of content) {
            if (char === '{') openBraces++;
            if (char === '}') closeBraces++;
          }

          accumulatedJSON += content;
          onChunk?.(content);

          // Check if we have a complete JSON object
          if (openBraces > 0 && openBraces === closeBraces) {
            isComplete = true;
          }
        } catch (e) {
          console.warn('Failed to parse chunk:', line);
        }
      }
    }

    // Validate and format the complete JSON
    try {
      const parsedResponse = JSON.parse(accumulatedJSON);
      console.log('Final complete CSS:', parsedResponse);
      return JSON.stringify(parsedResponse, null, 2);
    } catch (e) {
      console.error('Failed to parse JSON:', accumulatedJSON);
      throw new Error('Failed to parse complete JSON response');
    }

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Style Generation Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating styles");
  }
}; 

export const callOpenAI = async (messages: Array<{ role: string; content: string }>) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to connect to OpenAI API");
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
}; 