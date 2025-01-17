import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tables } from "@/integrations/supabase/types";
import { supabase } from "@/integrations/supabase/client";

interface UserMenuProps {
  userProfile: Tables<"profiles"> | null;
  onOpenEmailAuth: () => void;
  onOpenPhoneAuth: () => void;
}

const UserMenu = ({ userProfile, onOpenEmailAuth, onOpenPhoneAuth }: UserMenuProps) => {
  const navigate = useNavigate();

  if (userProfile) {
    return (
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
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={async () => {
            await supabase.auth.signOut();
            navigate('/');
          }}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="header-actions-button">
          Sign In
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={onOpenEmailAuth} className="header-actions-button">
          <Mail className="h-4 w-4 mr-2 header-actions-button-icon" />
          Sign in with Email
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onOpenPhoneAuth} className="header-actions-button">
          <Phone className="h-4 w-4 mr-2 header-actions-button-icon" />
          Sign in with Phone
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;