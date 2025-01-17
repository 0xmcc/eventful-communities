import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Demo user profile matching the Supabase schema
export const DEMO_USER = {
  id: "00000000-0000-4000-a000-000000000000",
  user_id: "00000000-0000-4000-a000-000000000001",
  username: "Test User",
  full_name: "Test User",
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const handleDemoLogin = async () => {
  try {
    // Store demo user in Supabase auth state
    await supabase.auth.updateUser({ data: DEMO_USER });
    toast.success('Signed in as Demo User');
    return { success: true, data: DEMO_USER };
  } catch (error) {
    console.error('Demo login error:', error);
    toast.error('Failed to sign in as Demo User');
    return { success: false, error };
  }
}; 