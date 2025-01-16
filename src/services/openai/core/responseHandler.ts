/**
 * Gets the stream response from the OpenAI API and returns the accumulated response,
 * calling the onChunk callback with each chunk of the response.
 * @param response - The response from the OpenAI API
 * @param onChunk - A callback function that will be called with each chunk of the response
 * @returns A Promise that resolves to the accumulated response from the OpenAI API
 */
export const handleStreamResponse = async (response: Response, onChunk?: (chunk: string) => void) => {
  // 1. Get the reader from the response
  const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
  if (!reader) throw new Error("Failed to get response reader");

  // 2. Initialize an empty string to accumulate the response
  let accumulated = '';
  
  try {
    // 3. Read the response in chunks
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      // 4. Append the chunk to the accumulated response
      accumulated += value;
      // 5. Call the onChunk callback with the chunk
      onChunk?.(value);
    }
    // 6. Return the accumulated response
    return accumulated;
  } finally {
    // 7. Release the reader lock
    reader.releaseLock();
  }
};

export const handleJSONResponse = async (response: Response) => {
  const data = await response.json();
  return data.choices[0].message.content;
}; 