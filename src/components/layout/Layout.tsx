import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import TopNavigation from "./TopNavigation";
import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
import { EmailAuthDialog } from "../auth/EmailAuthDialog";
import { supabase } from "@/integrations/supabase/client";
import HeaderActions from "./HeaderActions";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const [isPhoneAuthDialogOpen, setIsPhoneAuthDialogOpen] = useState(false);
  const [isEmailAuthDialogOpen, setIsEmailAuthDialogOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (profile) {
          setUserProfile(profile);
        } else {
          navigate('/onboarding');
        }
      } else {
        setUserProfile(null);
      }
      setIsLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        checkUser();
      } else if (event === 'SIGNED_OUT') {
        setUserProfile(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="relative flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
          <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
            vently
          </span>
          <div className="hidden md:flex flex-1 justify-center">
            <TopNavigation isAuthenticated={!!userProfile} />
          </div>
          <HeaderActions
            userProfile={userProfile}
            onOpenEmailAuth={() => setIsEmailAuthDialogOpen(true)}
            onOpenPhoneAuth={() => setIsPhoneAuthDialogOpen(true)}
          />
        </div>
      </header>
      <main className="pt-14 pb-16 md:pb-0">
        {children}
      </main>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <Navigation />
      </div>
      <PhoneAuthDialog 
        isOpen={isPhoneAuthDialogOpen} 
        onClose={() => setIsPhoneAuthDialogOpen(false)} 
      />
      <EmailAuthDialog 
        isOpen={isEmailAuthDialogOpen} 
        onClose={() => setIsEmailAuthDialogOpen(false)} 
      />
    </div>
  );
};

export default Layout;