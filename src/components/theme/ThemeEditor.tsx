import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCssUpdate } from "@/hooks/useCssUpdate";
import { Loader2 } from "lucide-react";

const STORAGE_KEY = "theme-editor-content";

interface ThemeEditorProps {
  className?: string;
  initialContent?: string;
}

export const ThemeEditor = ({ className }: ThemeEditorProps) => {
  // Initialize from localStorage if available
  const [styleDescription, setStyleDescription] = React.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved || "";
  });
  const [generatedCss, setGeneratedCss] = React.useState("");
  
  const {
    isGenerating,
    handleGenerateCSS,
    handleCSSUpdate,
  } = useCssUpdate(
    styleDescription,
    setGeneratedCss,
    (chunk: string) => {
      setGeneratedCss(prev => prev + chunk);
    }
  );

  // Save to localStorage whenever content changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, styleDescription);
  }, [styleDescription]);

  return (
    <div className={`space-y-4 ${className}`}>
      <Textarea
        data-theme-editor
        value={isGenerating ? generatedCss : styleDescription}
        onChange={(e) => setStyleDescription(e.target.value)}
        placeholder="Describe the styles you want..."
        className="min-h-[100px] resize-none theme-editor-textarea"
        disabled={isGenerating}
      />
      <div className="flex gap-2">
        <Button
          data-generate-css
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
          onClick={() => handleCSSUpdate(generatedCss)}
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