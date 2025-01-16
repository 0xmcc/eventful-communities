import { SELECTORS, CLASS_NAMING_GUIDE } from './selectors';

const STYLE_RULES = {
  format: 'camelCase',
  colors: 'hex',
  transitions: 'Include smooth transitions for interactive states',
  variables: {
    '--background': 'Main background color',
    '--foreground': 'Main text color',
    '--primary': 'Brand primary color',
    '--primary-foreground': 'Text color on primary background',
    '--secondary': 'Brand secondary color',
    '--secondary-foreground': 'Text color on secondary background',
    '--muted': 'Subtle background color',
    '--muted-foreground': 'Subtle text color',
    '--accent': 'Accent color for highlights',
    '--accent-foreground': 'Text color on accent background'
  }
};

export const generatePrompt = (description: string) => `
You are a CSS expert that converts descriptions into CSS JSON format.
You will style an event platform with the following elements:

${Object.entries(SELECTORS)
  .map(([category, sections]) => {
    return `${category}:\n${JSON.stringify(sections, null, 2)}`;
  })
  .join('\n\n')}

${CLASS_NAMING_GUIDE}

Style Rules:
${JSON.stringify(STYLE_RULES, null, 2)}

User Description: ${description}

Return only a valid JSON object with CSS properties following the above rules.
`;

export const STYLE_GENERATION_PROMPT = generatePrompt("Default modern style with smooth transitions"); 