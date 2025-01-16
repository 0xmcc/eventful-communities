import Layout from "@/components/layout/Layout";
import GoogleMapComponent from "@/components/map/GoogleMapComponent";
import EventCard from "@/components/events/EventCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Map = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
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

  const EventsList = () => (
    <div className="h-full overflow-auto">
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
        ) : events?.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No events found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events?.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row h-[calc(100vh-3.5rem)]">
        {/* Events Section - Left side on desktop */}
        {!isMobile && (
          <div className="w-1/2 border-r overflow-auto">
            <EventsList />
          </div>
        )}

        {/* Map Section */}
        <div className="flex-1 relative">
          <GoogleMapComponent events={events || []} />
        </div>

        {/* Mobile Bottom Sheet */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
                variant="secondary"
              >
                View Events
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <EventsList />
            </SheetContent>
          </Sheet>
        )}
      </div>
    </Layout>
  );
};

export default Map;