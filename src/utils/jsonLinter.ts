import { parse as json5Parse } from 'json5';
import Ajv from 'ajv';

const ajv = new Ajv();

// CSS Schema for validation
const cssSchema = {
  type: "object",
  patternProperties: {
    "^\\..+": {  // All properties must start with a dot (class selector)
      type: "object",
      properties: {
        "background-color": { type: "string", pattern: "^#[0-9a-fA-F]{6}$" },
        "color": { type: "string", pattern: "^#[0-9a-fA-F]{6}$" },
        "border": { type: "string" },
        "box-shadow": { type: "string" },
        ":hover": {
          type: "object",
          properties: {
            "background-color": { type: "string", pattern: "^#[0-9a-fA-F]{6}$" },
            "color": { type: "string", pattern: "^#[0-9a-fA-F]{6}$" }
          }
        }
      },
      additionalProperties: false
    }
  }
};

const validateCss = ajv.compile(cssSchema);

interface LinterResult {
  isValid: boolean;
  fixedJson?: string;
  error?: string;
  parsedData?: Record<string, any>;
}

export const lintThemeJson = (jsonString: string): LinterResult => {
  try {
    // Step 1: Fix malformed JSON
    const fixedJson = json5Parse(jsonString);
    
    // Step 2: Convert to proper JSON string
    const properJson = JSON.stringify(fixedJson, null, 2);
    
    // Step 3: Validate CSS properties
    if (!validateCss(fixedJson)) {
      return {
        isValid: false,
        error: `CSS Validation Error: ${JSON.stringify(validateCss.errors)}`
      };
    }

    return {
      isValid: true,
      fixedJson: properJson,
      parsedData: fixedJson
    };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}; 