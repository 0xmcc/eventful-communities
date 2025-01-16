import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Tables } from "@/integrations/supabase/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface EventCardProps {
  event: Tables<"events"> & {
    creator: Tables<"profiles">
  };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden bg-secondary hover:bg-secondary/90 transition-colors border-0">
      <div className="flex gap-4 p-4">
        <div className="flex-1 space-y-4">
          {/* Date and Time */}
          <div className="flex items-center text-secondary-foreground/80">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {format(new Date(event.start_time), "MMM d'th' 'at' h:mm a")}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="font-semibold text-xl text-secondary-foreground">
            {event.name}
          </h3>

          {/* Host Info */}
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={event.creator.avatar_url || undefined} />
              <AvatarFallback>
                {event.creator.full_name?.charAt(0) || event.creator.username?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-secondary-foreground/80">
              {event.creator.full_name || event.creator.username}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-secondary-foreground/80">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="line-clamp-1">{event.address}</span>
          </div>

          {/* Category Tags */}
          <div className="flex gap-2">
            <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary">
              {event.category}
            </span>
            {event.is_public && (
              <span className="text-sm px-3 py-1 rounded-full bg-red-500/20 text-red-400">
                Free
              </span>
            )}
          </div>
        </div>

        {/* Event Image */}
        <div className="w-32 h-32">
          <img
            src={event.cover_image_url || "https://source.unsplash.com/random/400x300?event"}
            alt={event.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </Card>
  );
};

export default EventCard;