import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import { Tables } from "@/integrations/supabase/types";

interface HeaderActionsProps {
  userProfile: Tables<"profiles"> | null;
  onOpenEmailAuth: () => void;
  onOpenPhoneAuth: () => void;
}

const HeaderActions = ({ userProfile, onOpenEmailAuth, onOpenPhoneAuth }: HeaderActionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/create-event')}
        className="header-actions-button"
      >
        <PlusCircle className="h-4 w-4 mr-2 header-actions-button-icon" />
        Create
      </Button>
      <UserMenu
        userProfile={userProfile}
        onOpenEmailAuth={onOpenEmailAuth}
        onOpenPhoneAuth={onOpenPhoneAuth}
      />
    </div>
  );
};

export default HeaderActions;