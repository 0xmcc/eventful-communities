import { useState } from "react";
import Navigation from "./Navigation";
import TopNavigation from "./TopNavigation";
import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
import { EmailAuthDialog } from "../auth/EmailAuthDialog";
import HeaderActions from "./HeaderActions";
import { useAuthCheck } from "@/hooks/useAuthCheck";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isPhoneAuthDialogOpen, setIsPhoneAuthDialogOpen] = useState(false);
  const [isEmailAuthDialogOpen, setIsEmailAuthDialogOpen] = useState(false);
  const { userProfile, isLoading } = useAuthCheck();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="relative flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
          <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
            vently
          </span>
          <div className="hidden md:flex flex-1 justify-center">
            <TopNavigation isAuthenticated={!isLoading && !!userProfile} />
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