import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import { Tables } from "@/integrations/supabase/types";
import { handleDemoLogin } from "@/utils/demoAuth";

interface HeaderActionsProps {
  userProfile: Tables<"profiles"> | null;
  onOpenEmailAuth: () => void;
  onOpenPhoneAuth: () => void;
}

const HeaderActions = ({ userProfile, onOpenEmailAuth, onOpenPhoneAuth }: HeaderActionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-4">
       
   
  
        <UserMenu
          userProfile={userProfile}
          onOpenEmailAuth={onOpenEmailAuth}
          onOpenPhoneAuth={onOpenPhoneAuth}
        />
      

   
    </div>
  );
};

export default HeaderActions;