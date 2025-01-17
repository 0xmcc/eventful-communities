interface StreamingHandlerParams {
  chunk: string;
  accumulatedCSS: string;
  isComplete?: boolean;
  updateTheme: (chunk: string, css: string) => void;
  applyTheme: (css: string) => void;
  setActiveTab: (tab: string) => void;
  hasTabSwitched: React.MutableRefObject<boolean>;
  currentTheme: string;
}
const extractCSSFromJSON = (json: string): string => {
    try {
      const parsed = JSON.parse(json);
      return parsed.css || parsed.style || parsed;
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      return json;
    }
  };
export const handleStreamingUpdate = ({
  chunk,
  accumulatedCSS,
  isComplete,
  updateTheme,
  applyTheme,
  setActiveTab,
  hasTabSwitched,
  currentTheme
}: StreamingHandlerParams) => {
  // Update editor with clean CSS
  updateTheme(chunk, accumulatedCSS);
  
  // Switch to editor tab on first update
  if (!hasTabSwitched.current) {
    setActiveTab("editor");
    hasTabSwitched.current = true;
  }
//  console.log('Handler - Streaming update complete', isComplete);
  // Apply CSS when streaming completes
  if (isComplete) {
    try {
      applyTheme(accumulatedCSS);
    } catch (e) {
      console.error('Failed to apply theme:', e);
      applyTheme(currentTheme); // Fallback to current theme
    }
  }
}; 