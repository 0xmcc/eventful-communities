import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import EventCard from "@/components/events/EventCard";
import { ThemeEditor } from "@/components/theme/ThemeEditor";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Events = () => {
  const { toast } = useToast();
  
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      console.log("Fetching events...");
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          creator:creator_id (
            id,
            username,
            full_name,
            avatar_url
          )
        `)
        .order("start_time", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
        throw error;
      }

      console.log("Fetched events:", data);
      return data as (Tables<"events"> & {
        creator: Tables<"profiles">
      })[];
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Events</h1>
          <div className="flex gap-4">
            {/* Add filter buttons here later */}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Customize Theme</h2>
          <ThemeEditor className="max-w-2xl" />
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
    </Layout>
  );
};

export default Events;