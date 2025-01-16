import { useState } from 'react';
import { formatPhoneNumber, formatE164, isValidPhoneNumber } from '@/utils/phoneFormatting';

interface UsePhoneInputReturn {
  phoneNumber: string;
  countryCode: string;
  formattedE164: string;
  isValid: boolean;
  setCountryCode: (code: string) => void;
  handlePhoneChange: (value: string) => void;
}

export function usePhoneInput(initialCountryCode = '1'): UsePhoneInputReturn {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(initialCountryCode);

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value, countryCode);
    setPhoneNumber(formatted);
  };

  const formattedE164 = formatE164(phoneNumber, countryCode);
  const isValid = isValidPhoneNumber(formattedE164);

  return {
    phoneNumber,
    countryCode,
    formattedE164,
    isValid,
    setCountryCode,
    handlePhoneChange,
  };
} 