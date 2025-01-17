import { extractCSSProperties } from '@/services/openai/features/styles/extractor';

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

export interface StreamLineResult {
  newJSON: string;
  openBraces: number;
  closeBraces: number;
  isComplete: boolean;
}

/**
 * Processes a single line from the OpenAI stream, tracking JSON completion and extracting CSS properties
 * @param line - The current line from the stream
 * @param accumulatedJSON - Previously accumulated JSON content
 * @param openBraces - Count of open braces seen so far
 * @param closeBraces - Count of close braces seen so far
 * @param onChunk - Optional callback for processed chunks (raw content or extracted CSS)
 * @returns {StreamLineResult} Updated JSON state and completion status
 */
export const processStreamLine = (
  line: string,
  accumulatedJSON: string,
  openBraces: number,
  closeBraces: number,
  onChunk?: (chunk: string, accumulatedJSON: string, isComplete: boolean) => void
): StreamLineResult => {
  // 1. Handle special cases
  if (line.length === 0 || line.startsWith(':')) {
    return { newJSON: accumulatedJSON, openBraces, closeBraces, isComplete: false };
  }

  if (line === 'data: [DONE]') {
    return { newJSON: accumulatedJSON, openBraces, closeBraces, isComplete: true };
  }

  try {
    // 2. Parse the line as JSON
    const json = JSON.parse(line.substring(6)) as OpenAIResponse;
    const content = json.choices[0]?.delta?.content || '';
    
    // 3. Count braces and build new JSON

    let newOpenBraces = openBraces;
    let newCloseBraces = closeBraces;
    
    for (const char of content) {
      if (char === '{') newOpenBraces++;
      if (char === '}') newCloseBraces++;
    }
    // 4. Build new JSON by appending the line to the accumulated JSON
    const newJSON = accumulatedJSON + content;

    // 5. Check if the JSON is complete and extract CSS properties
    // If the JSON is complete, extract the CSS properties and call the onChunk callback with the extracted CSS properties
    const isComplete = newOpenBraces > 0 && newOpenBraces === newCloseBraces;
    if (isComplete) {
      try {
        const parsed = JSON.parse(newJSON);
        const extracted = extractCSSProperties(parsed);
        onChunk?.(JSON.stringify(extracted, null, 2), newJSON, true);
      } catch (e) {
        onChunk?.(content, newJSON, true);
      }
    } 
    // 6. If the JSON is not complete, just append the line to the accumulated JSON and call the onChunk callback with the content
    else {
      onChunk?.(content, newJSON);
    }

    // 7. Return the new JSON, the new open and close braces counts, and the completion status
    return {
      newJSON,
      openBraces: newOpenBraces,
      closeBraces: newCloseBraces,
      isComplete: newOpenBraces > 0 && newOpenBraces === newCloseBraces
    };
  } catch (e) {
    console.warn('Failed to parse chunk:', line);
    return { newJSON: accumulatedJSON, openBraces, closeBraces, isComplete: false };
  }
};

/**
 * Handles the streaming response from OpenAI, processing it line by line until completion
 * @param reader - ReadableStream reader from the fetch response
 * @param onChunk - Optional callback for processed chunks of data
 * @returns {Promise<string>} The complete accumulated JSON response
 */
export const handleStream = async (
  reader: ReadableStreamDefaultReader<string>,
  onChunk?: (chunk: string, accumulatedJSON: string, isComplete: boolean) => void
): Promise<string> => {
    console.log("Handling stream");
    // 1. Initialize variables to track the JSON state
    let accumulatedJSON = "";
    let openBraces = 0;
    let closeBraces = 0;
    let isComplete = false;

    // 2. Read the stream until completion
    while (!isComplete) {

        const { value, done } = await reader.read();
        if (done) {
            console.log("STREAM COMPLETE")
            // Signal completion on stream end
            onChunk?.('', accumulatedJSON, true);
            break;
        }

        // 3. Split the value into lines and process each line
        const lines = value.split('\n');
        for (const line of lines) {
            // 4. Process each line and update the JSON state
            const result = processStreamLine(line, accumulatedJSON, openBraces, closeBraces, onChunk);
            accumulatedJSON = result.newJSON;
            openBraces = result.openBraces;
            closeBraces = result.closeBraces;
            isComplete = result.isComplete;
        
            // 5. If the JSON is complete, break the loop
            if (isComplete) {
                console.log("STREAM COMPLETE")
                onChunk?.('', accumulatedJSON, true);
                break;
            }
        }
    }

    // 6. Return the accumulated JSON
    return accumulatedJSON;
}; 