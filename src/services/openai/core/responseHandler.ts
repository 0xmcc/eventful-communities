import { handleStream } from './streamProcessor';

/**
 * Gets the stream response from the OpenAI API and returns the accumulated response,
 * calling the onChunk callback with each chunk of the response.
 * @param response - The response from the OpenAI API
 * @param onChunk - A callback function that will be called with each chunk of the response
 * @returns A Promise that resolves to the accumulated response from the OpenAI API
 */
export const handleStreamResponse = async (response: Response, onChunk?: (chunk: string) => void) => {
    console.log("Handling stream response");
    if (!response.body) {
        throw new Error("Failed to get response body");
      }
    
    // 1. Get the reader from the response
    const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
    if (!reader) throw new Error("Failed to get response reader");

    try {
        // 2. Use our streamProcessor to handle the stream
        const result = await handleStream(reader, onChunk);
        // 3. Return the processed result
        return result;
    } finally {
        reader.releaseLock();
    }
};

export const handleJSONResponse = async (response: Response) => {
    console.log("Handling JSON response");
  const data = await response.json();
  return data.choices[0].message.content;
}; 