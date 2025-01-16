import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import EventCard from "./EventCard";
import { useState } from "react";
import { startOfDay, endOfDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";

const EventsList = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      console.log("Fetching events...");
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("start_time", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
        throw error;
      }

      console.log("Fetched events:", data);
      return data as Tables<"events">[];
    },
    meta: {
      onError: (error: Error) => {
        console.error("Query error:", error);
        toast({
          title: "Error",
          description: "Failed to load events. Please try again later.",
          variant: "destructive",
        });
      },
    },
  });

  const getDateRange = (filter: string) => {
    const now = new Date();
    switch (filter) {
      case "Today":
        return {
          start: startOfDay(now),
          end: endOfDay(now),
        };
      case "Tomorrow":
        const tomorrow = addDays(now, 1);
        return {
          start: startOfDay(tomorrow),
          end: endOfDay(tomorrow),
        };
      case "This Week":
        return {
          start: startOfWeek(now),
          end: endOfWeek(now),
        };
      case "This Month":
        return {
          start: startOfMonth(now),
          end: endOfMonth(now),
        };
      default:
        return null;
    }
  };

  const filteredEvents = events?.filter((event) => {
    const matchesSearch = searchQuery
      ? event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    if (!dateFilter) return matchesSearch;

    const dateRange = getDateRange(dateFilter);
    if (!dateRange) return matchesSearch;

    const eventDate = new Date(event.start_time);
    return (
      matchesSearch &&
      eventDate >= dateRange.start &&
      eventDate <= dateRange.end
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="flex gap-4">
          {/* Add filter buttons here later */}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : error ? (
        <div className="text-center text-muted-foreground">
          Failed to load events. Please try again later.
        </div>
      ) : filteredEvents?.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No events found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;