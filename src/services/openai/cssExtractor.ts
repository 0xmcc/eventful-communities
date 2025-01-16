interface CSSProperties {
  [key: string]: string | number;
}

interface NestedCSS {
  [key: string]: CSSProperties | NestedCSS;
}

export const isValidCSSProperty = (key: string, value: any): boolean => {
  // Basic CSS property validation
  if (typeof value !== 'string' && typeof value !== 'number') return false;
  
  // Common CSS properties that accept numbers or strings
  const validProperties = [
    'width', 'height', 'margin', 'padding', 'border',
    'fontSize', 'lineHeight', 'opacity', 'zIndex',
    'top', 'right', 'bottom', 'left',
    'flex', 'order', 'gap'
  ];

  return validProperties.includes(key) || 
         typeof value === 'string' && (
           value.includes('px') || 
           value.includes('rem') || 
           value.includes('em') || 
           value.includes('#') || 
           value.includes('rgb') ||
           value.includes('var(--')
         );
};

export const extractCSSProperties = (obj: any): Record<string, CSSProperties> => {
  const result: Record<string, CSSProperties> = {};

  const processObject = (current: any, parentSelector: string = '') => {
    if (!current || typeof current !== 'object') return;

    // If the object has CSS properties, add them to result
    const hasValidCSSProperties = Object.entries(current).some(
      ([key, value]) => isValidCSSProperty(key, value)
    );

    if (hasValidCSSProperties) {
      const properties: CSSProperties = {};
      Object.entries(current).forEach(([key, value]) => {
        if (isValidCSSProperty(key, value)) {
          properties[key] = value;
        }
      });
      if (Object.keys(properties).length > 0) {
        result[parentSelector] = properties;
      }
    }

    // Recursively process nested objects
    Object.entries(current).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const newSelector = key.startsWith('.') ? key : 
                          parentSelector ? `${parentSelector} ${key}` : key;
        processObject(value, newSelector);
      }
    });
  };

  processObject(obj);
  return result;
}; 