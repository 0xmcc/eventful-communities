import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCssUpdate } from "@/hooks/useCssUpdate";
import { Loader2 } from "lucide-react";


interface ThemeEditorProps {
  className?: string;
  initialContent: string;
  onContentChange?: (content: string) => void;
}

export const ThemeEditor = ({ 
  className, 
  initialContent,
  onContentChange 
}: ThemeEditorProps) => {
  // Local state for editing
  const [localContent, setLocalContent] = React.useState(initialContent);

  // Sync with parent's content
  useEffect(() => {
    setLocalContent(initialContent);
  }, [initialContent]);

  const {
    isGenerating,
    handleGenerateCSS,
    handleCSSUpdate,
  } = useCssUpdate(
    localContent,
    setLocalContent,
    undefined // No need for streaming here as it's handled by parent
  );

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setLocalContent(newContent);
    onContentChange?.(newContent);
  };

  const handleApplyCSS = () => {
    handleCSSUpdate(localContent);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Textarea
        value={localContent}
        onChange={handleTextareaChange}
        placeholder="Your theme will appear here..."
        className="min-h-[100px] resize-none theme-editor-textarea"
        disabled={isGenerating}
      />
      <div className="flex gap-2">
        <Button
          onClick={handleGenerateCSS}
          variant="secondary"
          className="flex-1"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating CSS...
            </>
          ) : (
            "Generate CSS"
          )}
        </Button>
        <Button
          onClick={handleApplyCSS}
          variant="default"
          className="flex-1"
          disabled={isGenerating}
        >
          Apply CSS
        </Button>
      </div>
    </div>
  );
}; 