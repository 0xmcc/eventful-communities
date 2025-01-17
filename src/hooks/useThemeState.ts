import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { validateCSSJson, applyDynamicCSS } from "@/utils/cssUpdater";

interface ThemeStateOptions {
  onValidationError?: (error: string) => void;
  onChange?: (theme: string) => void;
}

export const useThemeState = (
  initialTheme: string = "",
  options: ThemeStateOptions = {}
) => {
  const { toast } = useToast();
  const [theme, setTheme] = useState(initialTheme);

  const resetTheme = () => {
    setTheme("");
  };

  const validateTheme = (themeJson: string) => {
    const rules = validateCSSJson(themeJson);
    if (!rules) {
      const error = "Invalid theme format";
      options.onValidationError?.(error);
    //   toast({
    //     title: "Validation Error",
    //     description: error,
    //     variant: "destructive",
    //   });
      return null;
    }
    return rules;
  };

  const applyTheme = (themeJson: string) => {
    console.log('Attempting to apply theme:', themeJson);
    const rules = validateTheme(themeJson);
    if (rules) {
      console.log('Theme validated, applying rules:', rules);
      applyDynamicCSS(rules);
      options.onChange?.(themeJson);
    } else {
      console.error('Theme validation failed');
    }
  };

  const handleStreamingUpdate = (chunk: string, accumulatedJSON: string) => {
    // Use the accumulated JSON for state updates instead of concatenating chunks
    setTheme(accumulatedJSON);
  };

  return {
    theme,
    resetTheme,
    handleStreamingUpdate,
    applyTheme
  };
};
