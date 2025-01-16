import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import TopNavigation from "./TopNavigation";
import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
import { EmailAuthDialog } from "../auth/EmailAuthDialog";
import { Button } from "../ui/button";
import { Phone, Mail, PlusCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const [isPhoneAuthDialogOpen, setIsPhoneAuthDialogOpen] = useState(false);
  const [isEmailAuthDialogOpen, setIsEmailAuthDialogOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
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
      }
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
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="relative flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
          <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
            vently
          </span>
          <div className="hidden md:flex flex-1 justify-center">
            <TopNavigation />
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/create-event')}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create
            </Button>
            {userProfile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userProfile.avatar_url} />
                      <AvatarFallback>
                        {userProfile.full_name?.charAt(0) || userProfile.username?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span>{userProfile.full_name || userProfile.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={async () => {
                    await supabase.auth.signOut();
                    navigate('/');
                  }}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsEmailAuthDialogOpen(true)}>
                    <Mail className="h-4 w-4 mr-2" />
                    Sign in with Email
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsPhoneAuthDialogOpen(true)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Sign in with Phone
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </header>
      <main className="pt-14 pb-16 md:pb-0">
        {children}
      </main>
      <div className="md:hidden">
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