import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { validateCSSJson, applyDynamicCSS } from "@/utils/cssUpdater";
import { generateStylesWithAI } from "@/services/openai/features/styles/generator";

export const useCssUpdate = (
  styleDescription: string, 
  setGeneratedCss: (css: string) => void,
  onStreamingUpdate?: (chunk: string) => void
) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCSSUpdate = (cssToApply: string = styleDescription) => {
    const cssRules = validateCSSJson(cssToApply);
    if (!cssRules) {
      toast({
        title: "Invalid CSS JSON",
        description: "Please check your JSON format and try again",
        variant: "destructive",
      });
      return;
    }
    applyDynamicCSS(cssRules);
  };

  const handleGenerateCSS = async () => {
    try {
      setIsGenerating(true);
      const generatedCss = await generateStylesWithAI(styleDescription, onStreamingUpdate);
      setGeneratedCss(generatedCss);
      handleCSSUpdate(generatedCss);
    } catch (error) {
      toast({
        title: "CSS Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate CSS from your description",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    handleCSSUpdate,
    handleGenerateCSS,
  };
}; 