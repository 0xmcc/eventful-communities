import { prepareRequestBody } from './requestBuilder';
import { handleStreamResponse, handleJSONResponse } from './responseHandler';

const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
interface OpenAIRequestOptions {
    prompt: string;
    stream?: boolean;
    onChunk?: (chunk: string) => void;
    systemPrompt?: string;
  }
export const makeOpenAIRequest = async ({ 
    prompt, 
    stream = false, 
    onChunk, 
    systemPrompt 
}: OpenAIRequestOptions) => {
  const body = prepareRequestBody(prompt, stream, systemPrompt)


  console.log("Making OpenAI request", body);   
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || `OpenAI API error: ${response.status}`);
  }
  console.log("STREAM RESPONSE", stream, body.stream, prompt);
  return stream 
    ? handleStreamResponse(response, onChunk)
    : handleJSONResponse(response);

}; 