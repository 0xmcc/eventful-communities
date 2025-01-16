import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export interface AuthCheckResult {
  userProfile: any;
  isLoading: boolean;
}

export function useAuthCheck(): AuthCheckResult {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (profile) {
        setUserProfile(profile);
      } else {
        navigate('/onboarding');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setUserProfile(null);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        setIsLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          await fetchProfile(user.id);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error('Error checking user:', error);
        setUserProfile(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);
      
      if (event === 'SIGNED_IN' && session?.user) {
        await fetchProfile(session.user.id);
      } else if (event === 'SIGNED_OUT') {
        setUserProfile(null);
        navigate('/');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return { userProfile, isLoading };
}