import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ThemeEditorProps {
  className?: string;
  initialContent: string;
  onContentChange?: (content: string) => void;
  onApplyTheme?: (theme: string) => void;
}

export const ThemeEditor = ({ 
  className, 
  initialContent,
  onContentChange,
  onApplyTheme
}: ThemeEditorProps) => {
  // Local state for editing
  const [localContent, setLocalContent] = React.useState(initialContent);

  // Sync with parent's content
  useEffect(() => {
    setLocalContent(initialContent);
  }, [initialContent]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setLocalContent(newContent);
    onContentChange?.(newContent);
  };

  const handleApplyCSS = () => {
    onApplyTheme?.(localContent);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Textarea
        value={localContent}
        onChange={handleTextareaChange}
        placeholder="Your theme will appear here..."
        className="min-h-[450px] resize-none theme-editor-textarea"
      />
      <div className="flex gap-2">
        <Button
          onClick={handleApplyCSS}
          variant="default"
          className="flex-1 theme-editor-apply-button"
        >
          Apply CSS
        </Button>
      </div>
    </div>
  );
}; 