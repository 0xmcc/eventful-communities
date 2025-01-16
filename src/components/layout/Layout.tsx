import { useState } from "react";
import Navigation from "./Navigation";
import TopNavigation from "./TopNavigation.tsx";
import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="relative flex items-center h-14 px-4 max-w-7xl mx-auto">
          <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
            vently
          </span>
          <div className="hidden md:flex ml-auto">
            <TopNavigation />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-4"
            onClick={() => setIsAuthDialogOpen(true)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      </header>
      <main className="pt-14 pb-16 md:pb-0">
        {children}
      </main>
      <div className="md:hidden">
        <Navigation />
      </div>
      <PhoneAuthDialog 
        isOpen={isAuthDialogOpen} 
        onClose={() => setIsAuthDialogOpen(false)} 
      />
    </div>
  );
};

export default Layout;