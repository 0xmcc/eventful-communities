import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { Tables } from "@/integrations/supabase/types";

interface EventCardProps {
  event: Tables<"events">;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.cover_image_url || "https://source.unsplash.com/random/400x300?event"}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
          {event.category}
        </div>
      </div>
      <CardHeader className="space-y-1">
        <h3 className="font-semibold text-xl line-clamp-1">{event.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {event.description || "No description available"}
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {format(new Date(event.start_time), "MMM d, yyyy 'at' h:mm a")}
          </span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="line-clamp-1">{event.address}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-2" />
          <span>50 attending</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;