import { OPENAI_API_KEY } from '../config/env';

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export const generateCSSWithOpenAI = async (prompt: string): Promise<string> => {
  const apiKey = localStorage.getItem('OPENAI_API_KEY');
  
  if (!apiKey) {
    throw new Error("OpenAI API key is not set. Please add it in the project settings.");
  }

  if (!prompt.trim()) {
    throw new Error("Please provide a description of the styles you want to generate");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are a CSS expert that converts plain English descriptions into CSS JSON format. 
            You will style a chat application with the following elements:

            Chat Interface Elements:
            - .message-bubble: The base class for all chat messages (rounded corners, padding, max-width)
            - .user-message: Messages sent by the user (extends message-bubble, different background color)
            - .ai-message: Messages sent by the AI (extends message-bubble, different background color)
            - .message-list: The container for all messages (scrollable, padding)
            - .chat-input: The input field where users type messages (full width, padding)
            - .chat-container: The main chat interface container (flex layout, height)

            Form Elements:
            - textarea: For multiline text input (padding, border, rounded corners)
            - input: For single-line text input (padding, border, rounded corners)
            - button: Base button styles (padding, background, text color)
            - button:hover: Hover state styles
            - button:active: Active state styles
            - button:focus: Focus state styles
            - button:disabled: Disabled state styles

            Global Styles:
            - body: Base styles for the entire application
            - .bg-background: Background color for the entire application

            Always return valid JSON with CSS properties in camelCase format.
            Use hex color codes for better readability.
            Include transitions for hover/active states.
            Only respond with the JSON object, nothing else.
            
            Example format:
            {
              ".message-bubble": {
                "padding": "1rem",
                "borderRadius": "1rem",
                "marginBottom": "0.5rem",
                "maxWidth": "80%",
                "transition": "all 0.2s ease"
              }
            }`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to connect to OpenAI API");
    }

    const data = await response.json() as OpenAIResponse;
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("No response received from OpenAI");
    }

    // Try to parse the response to ensure it's valid JSON
    const parsedResponse = JSON.parse(data.choices[0].message.content);
    return JSON.stringify(parsedResponse, null, 2);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`OpenAI API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating CSS");
  }
};