import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";

interface CommunityCardProps {
  id: string;
  name: string;
  bio?: string | null;
  imageUrl?: string | null;
  followersCount: number;
  isFollowing: boolean;
  onFollowToggle: (communityId: string) => void;
}

const CommunityCard = ({
  id,
  name,
  bio,
  imageUrl,
  followersCount,
  isFollowing,
  onFollowToggle,
}: CommunityCardProps) => {
  return (
    <Card className="overflow-hidden community-card-bg-background">
      <div className="relative h-32 w-full">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-lg font-bold community-card-primary-text">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 community-card-secondary-text">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-muted-foreground community-card-secondary-text">
          <Users className="h-4 w-4 community-card-secondary-text" />
          <span>{followersCount} followers</span>
        </div>
        <Button
          variant={isFollowing ? "outline" : "default"}
          onClick={() => onFollowToggle(id)}
          className="community-card-button"
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommunityCard;