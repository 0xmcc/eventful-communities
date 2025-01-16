interface CSSRule {
  [property: string]: string | number;
}

interface CSSRules {
  [selector: string]: CSSRule;
}

const STYLE_ELEMENT_ID = 'dynamic-styles';

/**
 * Validates if the provided CSS JSON is in the correct format
 */
export const validateCSSJson = (cssString: string): CSSRules | null => {
  try {
    const cssRules = JSON.parse(cssString);
    
    // Validate structure
    if (typeof cssRules !== 'object' || cssRules === null) {
      console.error('CSS JSON must be an object');
      return null;
    }

    // Validate each selector and its rules
    for (const [selector, rules] of Object.entries(cssRules)) {
      if (typeof selector !== 'string' || !selector.startsWith('.')) {
        console.error(`Invalid selector: ${selector}`);
        return null;
      }

      if (typeof rules !== 'object' || rules === null) {
        console.error(`Invalid rules for selector ${selector}`);
        return null;
      }
    }

    return cssRules;
  } catch (error) {
    console.error('Failed to parse CSS JSON:', error);
    return null;
  }
};

/**
 * Creates or gets the style element for dynamic CSS
 */
const getOrCreateStyleElement = (): HTMLStyleElement => {
  let styleElement = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement;

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = STYLE_ELEMENT_ID;
    document.head.appendChild(styleElement);
  }

  return styleElement;
};

/**
 * Converts a CSS rule object to a CSS string
 */
const formatCSSRule = (rules: CSSRule): string => {
  return Object.entries(rules)
    .map(([property, value]) => `  ${property}: ${value} !important;`)
    .join('\n');
};

/**
 * Converts CSS rules object to a formatted CSS string
 */
const formatCSSRules = (cssRules: CSSRules): string => {
  return Object.entries(cssRules)
    .map(([selector, rules]) => {
      const formattedRules = formatCSSRule(rules);
      return `${selector} {\n${formattedRules}\n}`;
    })
    .join('\n\n');
};

/**
 * Applies dynamic CSS rules to the document
 */
export const applyDynamicCSS = (cssRules: CSSRules): void => {
  try {
    const styleElement = getOrCreateStyleElement();
    const cssString = formatCSSRules(cssRules);
    styleElement.textContent = cssString;
    
    console.log('Successfully applied dynamic CSS');
  } catch (error) {
    console.error('Failed to apply dynamic CSS:', error);
  }
}; 
