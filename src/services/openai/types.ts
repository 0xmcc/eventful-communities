export interface OpenAIResponse {
  choices: Array<{
    delta?: {
      content?: string;
    };
    message?: {
      content: string;
    };
  }>;
}

export interface OpenAIStreamParams {
  prompt: string;
  onChunk?: (chunk: string) => void;
}

export interface StreamLineResult {
  newJSON: string;
  openBraces: number;
  closeBraces: number;
  isComplete: boolean;
}

export interface ChatAnalysis {
  isStyleRequest: boolean;
  suggestedStyles?: string;  // CSS description if it's a style request
  response: string;          // General response to show user
} 