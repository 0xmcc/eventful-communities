export const COUNTRY_CODES = [
  { code: 'US', dialCode: '1', flag: '🇺🇸' },
  { code: 'GB', dialCode: '44', flag: '🇬🇧' },
  { code: 'CA', dialCode: '1', flag: '🇨🇦' },
  { code: 'AU', dialCode: '61', flag: '🇦🇺' },
  // Add more countries as needed
];

export const formatPhoneNumber = (value: string, countryCode: string): string => {
  // Remove all non-digit characters
  const cleaned = value.replace(/\D/g, '');
  
  // Format for US/CA numbers
  if (countryCode === '1') {
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  }
  
  // For other countries, just limit the length
  return cleaned.slice(0, 15);
};

export const formatE164 = (number: string, countryCode: string): string => {
  const cleaned = number.replace(/\D/g, '');
  return `+${countryCode}${cleaned}`;
};

export const isValidPhoneNumber = (number: string): boolean => {
  return number.length >= 8;
};

export const getPhoneNumberPlaceholder = (countryCode: string): string => {
  return countryCode === '1' ? "(555) 555-5555" : "Phone number";
};

export const getPhoneNumberExample = (countryCode: string): string => {
  return countryCode === '1' ? '+1 (555) 555-5555' : `+${countryCode} XXXXXXXXX`;
}; 