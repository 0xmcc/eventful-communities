import { OpenAIStreamParams } from './types';
import { prepareRequestBody } from './requestBuilder';
import { handleStream } from './streamProcessor';
import { extractCSSProperties } from './cssExtractor';

export const generateStylesWithAI = async ({ prompt, onChunk }: OpenAIStreamParams): Promise<string> => {
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
      body: prepareRequestBody(prompt)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to connect to OpenAI API");
    }

    const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
    if (!reader) throw new Error("Failed to get response reader");

    const accumulatedJSON = await handleStream(reader, onChunk);

    try {
      const parsedResponse = JSON.parse(accumulatedJSON);
      const cssProperties = extractCSSProperties(parsedResponse);
      console.log('Extracted CSS properties:', cssProperties);
      return JSON.stringify(cssProperties, null, 2);
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

export * from './types'; 