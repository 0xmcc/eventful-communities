import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AuthResponse {
  success: boolean;
  error: string | null;
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithPhone = async (phoneNumber: string): Promise<AuthResponse> => {
    console.group('📱 Phone Sign In Attempt');
    console.log('Phone Number:', phoneNumber);
    setIsLoading(true);
    setError(null);
    
    try {
      const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      console.log('Formatted Number:', formattedNumber);
      
      console.log('Calling Supabase signInWithOtp...');
      const { data, error: signInError } = await supabase.auth.signInWithOtp({
        phone: formattedNumber,
        options: {
          channel: 'sms',
          shouldCreateUser: true,
        }
      });

      console.log('Supabase Response:', { data, error: signInError });

      if (signInError) {
        console.error('Sign In Error:', {
          message: signInError.message,
          status: signInError?.status,
          details: signInError
        });
        throw signInError;
      }

      console.log('OTP Sent Successfully');
      return { success: true, error: null };
    } catch (err) {
      console.error('Sign In Error Details:', {
        error: err,
        type: err instanceof Error ? 'Error Object' : typeof err,
        message: err instanceof Error ? err.message : 'Unknown error'
      });
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to send OTP';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
      console.groupEnd();
    }
  };

  const verifyOTP = async (phoneNumber: string, token: string): Promise<AuthResponse> => {
    console.group('🔐 OTP Verification Attempt');
    console.log('Phone:', phoneNumber);
    console.log('Token Length:', token.length);
    setIsLoading(true);
    setError(null);

    try {
      console.log('Calling Supabase verifyOtp...');
      const { data, error: verifyError } = await supabase.auth.verifyOtp({
        phone: phoneNumber,
        token,
        type: 'sms',
      });

      console.log('Verification Response:', { data, error: verifyError });

      if (verifyError) {
        console.error('Verification Error:', {
          message: verifyError.message,
          status: verifyError?.status,
          details: verifyError
        });
        throw verifyError;
      }

      console.log('User Data:', data.user);
      console.log('Session:', data.session);
      return { success: true, error: null };
    } catch (err) {
      console.error('Verification Error Details:', {
        error: err,
        type: err instanceof Error ? 'Error Object' : typeof err,
        message: err instanceof Error ? err.message : 'Unknown error'
      });
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to verify OTP';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
      console.groupEnd();
    }
  };

  const signOut = async (): Promise<void> => {
    console.log('📤 Signing out user...');
    await supabase.auth.signOut();
    console.log('Sign out complete');
  };

  return {
    signInWithPhone,
    verifyOTP,
    signOut,
    isLoading,
    error,
  };
} 