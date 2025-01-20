import { makeOpenAIRequest } from '@/services/openai/core/client';
import { ExtractedEventData } from './types';

export const extractEventData = async (message: string): Promise<ExtractedEventData | null> => {
  const systemPrompt = `You are an event information extractor. Extract structured event data from user messages.
  Return a JSON object matching the following PostgreSQL schema:
  
  - name: text (required)
  - description: text (optional)
  - address: text (required)
  - startTime: timestamp with time zone (required, ISO format)
  - duration: interval (required, PostgreSQL interval format)
  - category: event_category (required)
  - isPublic: boolean (required)
  
  Example response:
  {
    "name": "Summer Beach Party",
    "description": "Join us for a fun day at the beach!",
    "address": "123 Beach Road, San Francisco, CA",
    "startTime": "2024-07-15T14:00:00Z",
    "duration": "4 hours",
    "category": "social",
    "isPublic": true
  }`;

  try {
    const response = await makeOpenAIRequest({
      prompt: message,
      stream: false,
      systemPrompt
    });

    return JSON.parse(response);
  } catch (error) {
    console.error('Event extraction error:', error);
    return null;
  }
}; 