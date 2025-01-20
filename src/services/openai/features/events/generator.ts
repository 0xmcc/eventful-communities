import { makeOpenAIRequest } from '@/services/openai/core/client';
import { ExtractedEventData, GeneratedEventContent } from './types';

export const generateEventContent = async (
  baseInfo: Partial<ExtractedEventData>
): Promise<GeneratedEventContent> => {
  const systemPrompt = `You are an event content generator. Create engaging event content that matches our PostgreSQL schema:
  - name: text (required)
  - description: text (required)
  - category: event_category (required)
  - duration: interval (required, PostgreSQL format)
  
  Also suggest:
  - marketingCopy: promotional text
  - suggestedTags: array of relevant tags
  
  Keep descriptions engaging but factual. Ensure all generated content maintains a consistent tone.
  
  Example response:
  {
    "name": "Sunset Beach Yoga",
    "description": "Join us for a rejuvenating sunset yoga session...",
    "suggestedCategory": "fitness",
    "suggestedDuration": "1 hour 30 minutes",
    "marketingCopy": "Unwind and recharge with our beach-side yoga experience...",
    "suggestedTags": ["yoga", "wellness", "beach", "sunset", "fitness"]
  }`;

  try {
    const response = await makeOpenAIRequest({
      prompt: JSON.stringify(baseInfo),
      stream: false,
      systemPrompt
    });

    return JSON.parse(response);
  } catch (error) {
    console.error('Event generation error:', error);
    throw new Error('Failed to generate event content');
  }
};

export const improveEventDescription = async (
  currentDescription: string,
  category: EventCategory
): Promise<string> => {
  const systemPrompt = `You are an event description optimizer. Improve the given description to be more engaging and effective.
  Consider the event category "${category}" when making improvements.
  Maintain factual accuracy while making the description more compelling.
  Return only the improved description text.`;

  try {
    const response = await makeOpenAIRequest({
      prompt: `Description: ${currentDescription}`,
      stream: false,
      systemPrompt
    });

    return response;
  } catch (error) {
    console.error('Description improvement error:', error);
    throw new Error('Failed to improve event description');
  }
}; 