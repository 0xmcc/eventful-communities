import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCssUpdate } from "@/hooks/useCssUpdate";
import { Loader2 } from "lucide-react";

interface ThemeEditorProps {
  className?: string;
}

export const ThemeEditor = ({ className }: ThemeEditorProps) => {
  const [styleDescription, setStyleDescription] = React.useState("");
  const [generatedCss, setGeneratedCss] = React.useState("");
  
  const {
    isGenerating,
    handleGenerateCSS,
    handleCSSUpdate,
  } = useCssUpdate(
    styleDescription,  // The input text that describes desired styles
    setGeneratedCss,  // Function to update the generated CSS
    (chunk: string) => {
      setGeneratedCss(prev => prev + chunk);  // Accumulate streaming chunks
    }
  );

  return (
    <div className={`space-y-4 ${className}`}>
      <Textarea
        value={isGenerating ? generatedCss : styleDescription}  // Show streaming during generation
        onChange={(e) => setStyleDescription(e.target.value)}
        placeholder="Describe the styles you want (e.g., 'modern dark theme with purple accents')"
        className="min-h-[100px] resize-none"
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