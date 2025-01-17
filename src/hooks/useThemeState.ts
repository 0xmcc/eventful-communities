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
    try {
      const rules = validateCSSJson(themeJson);
      if (!rules) {
        const error = "Invalid theme format. Please check for syntax errors.";
        options.onValidationError?.(error);
        toast({
          title: "Theme Validation Error",
		  // add a cute error message that encourages the user to try again with a new message
          description: "Oops! Looks like there was an error with your theme. Please try again with a new message.",
          variant: "destructive",
          duration: 3000,
        });
        console.log("Toast should be showing");
        return null;
      }
      return rules;
    } catch (error) {
      toast({
        title: "Theme Validation Error",
        description: `Failed to parse theme: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
        duration: 3000,
      });
      console.log("Error toast should be showing", error);
      return null;
    }
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
