import { Tables } from "@/integrations/supabase/types";
import { Loader2 } from "lucide-react";
import EventCard from "./EventCard";

interface EventsGridProps {
  events: (Tables<"events"> & {
    creator: Tables<"profiles">
  })[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

const EventsGrid = ({ events, isLoading, error }: EventsGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-muted-foreground">
        Failed to load events. Please try again later.
      </div>
    );
  }

  if (!events?.length) {
    return (
      <div className="text-center text-muted-foreground">
        No events found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;