import { useState } from "react";
import Navigation from "./Navigation";
import TopNavigation from "./TopNavigation";
import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
import { EmailAuthDialog } from "../auth/EmailAuthDialog";
import HeaderActions from "./HeaderActions";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { StyleChatModal } from "@/components/chat/StyleChatModal";
import ventlyLogo from '@/assets/ventlyLogo.png';
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isPhoneAuthDialogOpen, setIsPhoneAuthDialogOpen] = useState(false);
  const [isEmailAuthDialogOpen, setIsEmailAuthDialogOpen] = useState(false);
  const { userProfile, isLoading } = useAuthCheck();

//  const ventlyLogo = require('@/assets/ventlyLogo.png');
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative flex items-center justify-between h-14 px-4 max-w-7xl mx-auto md:px-2">
          <Link to="/" className="flex items-center">
            <img src={ventlyLogo} alt="vently logo" className="w-10 h-10" />
          </Link>
          {/* <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary logo-text">
            vently
          </span> */}
          <div className="md:flex flex-1 justify-center">
            <TopNavigation isAuthenticated={!isLoading && !!userProfile} />
          </div>
          <HeaderActions
            userProfile={userProfile}
            onOpenEmailAuth={() => setIsEmailAuthDialogOpen(true)}
            onOpenPhoneAuth={() => setIsPhoneAuthDialogOpen(true)}
          />
        </div>
      </header>
      <main className="flex-1">
        {children}
        <StyleChatModal />
      </main>
      {/* <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <Navigation />
      </div> */}
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