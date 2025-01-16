import { OpenAIResponse, StreamLineResult } from './types';
import { extractCSSProperties } from './cssExtractor';

export const processStreamLine = (
  line: string,
  accumulatedJSON: string,
  openBraces: number,
  closeBraces: number,
  onChunk?: (chunk: string) => void
): StreamLineResult => {
  if (line.length === 0 || line.startsWith(':')) {
    return { newJSON: accumulatedJSON, openBraces, closeBraces, isComplete: false };
  }

  if (line === 'data: [DONE]') {
    return { newJSON: accumulatedJSON, openBraces, closeBraces, isComplete: true };
  }

  try {
    const json = JSON.parse(line.substring(6)) as OpenAIResponse;
    const content = json.choices[0]?.delta?.content || '';
    
    let newOpenBraces = openBraces;
    let newCloseBraces = closeBraces;
    
    for (const char of content) {
      if (char === '{') newOpenBraces++;
      if (char === '}') newCloseBraces++;
    }

    const newJSON = accumulatedJSON + content;
    if (newOpenBraces > 0 && newOpenBraces === newCloseBraces) {
      try {
        const parsed = JSON.parse(newJSON);
        const extracted = extractCSSProperties(parsed);
        onChunk?.(JSON.stringify(extracted, null, 2));
      } catch (e) {
        onChunk?.(content);
      }
    } else {
      onChunk?.(content);
    }
    
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

export const handleStream = async (
  reader: ReadableStreamDefaultReader<string>,
  onChunk?: (chunk: string) => void
): Promise<string> => {
  let accumulatedJSON = "";
  let openBraces = 0;
  let closeBraces = 0;
  let isComplete = false;

  while (!isComplete) {
    const { value, done } = await reader.read();
    if (done) break;

    const lines = value.split('\n');
    for (const line of lines) {
      const result = processStreamLine(line, accumulatedJSON, openBraces, closeBraces, onChunk);
      accumulatedJSON = result.newJSON;
      openBraces = result.openBraces;
      closeBraces = result.closeBraces;
      isComplete = result.isComplete;
      
      if (isComplete) break;
    }
  }

  return accumulatedJSON;
}; 