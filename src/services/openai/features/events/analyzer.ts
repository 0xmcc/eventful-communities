import { makeOpenAIRequest } from '@/services/openai/core/client';

const EVENT_KEYWORDS = [
  'event', 'party', 'meetup', 'concert', 'conference',
  'workshop', 'gathering', 'festival', 'show', 'exhibition',
  'when', 'where', 'host', 'organize', 'attend', 'rsvp',
  'tickets', 'join', 'happening', 'schedule'
];


/**
 * Determines if a message is requesting event-related actions
 * @param message - The user's message to analyze
 * @returns True if the message is related to events
 */
export const isEventRequest = async (message: string): Promise<boolean> => {
  const lowerMessage = message.toLowerCase();
  
  // Quick keyword check for obvious event requests
  if (EVENT_KEYWORDS.some(keyword => lowerMessage.includes(keyword))) {
    return true;
  }

  const systemPrompt = `You are an event request analyzer. Your task is to determine if the user is asking about creating, finding, or managing events.
  You must respond with ONLY the word 'true' or 'false' - no punctuation, no explanation.
  
  Example responses:
  true
  false`;

  try {
    const response = await makeOpenAIRequest({
      prompt: message,
      stream: false,
      systemPrompt
    });

    console.log("Event analysis response", response);
    return response.trim().toLowerCase() === 'true';
  } catch (error) {
    console.error('Event analysis error:', error);
    return false;
  }
}; 