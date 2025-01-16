import { handleStream } from "./streamProcessor";

interface OpenAICallParams {
  messages: Array<{ role: string; content: string }>;
  stream?: boolean;
  onChunk?: (chunk: string) => void;
}

export const callOpenAI = async ({ messages, stream = false, onChunk }: OpenAICallParams) => {
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
        max_tokens: stream ? 2000 : 500,
        stream
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to connect to OpenAI API");
    }

    if (stream) {
      const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
      if (!reader) throw new Error("Failed to get response reader");
      return handleStream(reader, onChunk);
    } else {
      const data = await response.json();
      return data.choices[0].message.content;
    }

  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
}; 