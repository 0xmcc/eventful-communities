import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { usePhoneInput } from '@/hooks/usePhoneInput';
import { COUNTRY_CODES, getPhoneNumberPlaceholder, getPhoneNumberExample } from '@/utils/phoneFormatting';
import { toast } from 'sonner';

interface PhoneAuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhoneAuthDialog({ isOpen, onClose }: PhoneAuthDialogProps) {
  const {
    phoneNumber,
    countryCode,
    formattedE164,
    isValid,
    setCountryCode,
    handlePhoneChange,
  } = usePhoneInput();

  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { signInWithPhone, verifyOTP, isLoading, error } = useAuth();

  // Reset state when dialog is closed
  useEffect(() => {
    if (!isOpen) {
      setShowOtpInput(false);
      setOtp('');
      handlePhoneChange(''); // Reset phone number
      setCountryCode('1'); // Reset to default country code
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleSendOTP = async () => {
    if (!isValid) {
      toast.error('Please enter a valid phone number');
      return;
    }

    const result = await signInWithPhone(formattedE164);
    
    if (result.success) {
      setShowOtpInput(true);
      toast.success('OTP sent successfully!');
    } else {
      toast.error(result.error || 'Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
    const result = await verifyOTP(formattedE164, otp);
    
    if (result.success) {
      toast.success('Successfully authenticated!');
      onClose();
    } else {
      toast.error(result.error || 'Failed to verify OTP');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in with Phone</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {!showOtpInput ? (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Select
                  value={countryCode}
                  onValueChange={setCountryCode}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRY_CODES.map((country) => (
                      <SelectItem key={country.code} value={country.dialCode}>
                        {country.flag} +{country.dialCode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder={getPhoneNumberPlaceholder(countryCode)}
                  value={phoneNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  type="tel"
                  className="flex-1"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                Example: {getPhoneNumberExample(countryCode)}
              </div>
              <Button 
                onClick={handleSendOTP} 
                disabled={isLoading || !isValid}
                className="w-full"
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                maxLength={6}
              />
              <Button 
                onClick={handleVerifyOTP} 
                disabled={isLoading || !otp}
                className="w-full"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </Button>
            </div>
          )}
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 