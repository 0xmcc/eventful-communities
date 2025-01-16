import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { AuthError } from '@supabase/supabase-js';

interface AuthResponse {
  success: boolean;
  error: string | null;
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
    console.group('📧 Email Sign In Attempt');
    console.log('Email:', email);
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Calling Supabase signInWithPassword...');
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
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

      console.log('Sign In Successful');
      return { success: true, error: null };
    } catch (err) {
      console.error('Sign In Error Details:', {
        error: err,
        type: err instanceof Error ? 'Error Object' : typeof err,
        message: err instanceof Error ? err.message : 'Unknown error'
      });
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
      console.groupEnd();
    }
  };

  const signUp = async (email: string, password: string): Promise<AuthResponse> => {
    console.group('📧 Email Sign Up Attempt');
    console.log('Email:', email);
    setIsLoading(true);
    setError(null);

    try {
      console.log('Calling Supabase signUp...');
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });

      console.log('Sign Up Response:', { data, error: signUpError });

      if (signUpError) {
        console.error('Sign Up Error:', {
          message: signUpError.message,
          status: signUpError?.status,
          details: signUpError
        });
        throw signUpError;
      }

      console.log('Sign Up Successful');
      return { success: true, error: null };
    } catch (err) {
      console.error('Sign Up Error Details:', {
        error: err,
        type: err instanceof Error ? 'Error Object' : typeof err,
        message: err instanceof Error ? err.message : 'Unknown error'
      });
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign up';
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
    signInWithEmail,
    signUp,
    signOut,
    isLoading,
    error,
  };
}