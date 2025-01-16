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