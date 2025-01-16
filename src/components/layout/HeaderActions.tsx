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
      >
        <PlusCircle className="h-4 w-4 mr-2" />
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