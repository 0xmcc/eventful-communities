import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in environment variables');
}

// Get the current URL for redirect
const getRedirectTo = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    const currentOrigin = window.location.origin;
    // Don't use localhost as redirect URL
    if (currentOrigin.includes('localhost')) {
      return 'https://your-production-url.com'; // Replace with your actual production URL
    }
    return currentOrigin;
  }
  return 'https://your-production-url.com'; // Replace with your actual production URL
};

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      redirectTo: getRedirectTo(),
    }
  }
);