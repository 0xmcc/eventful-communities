import Layout from "@/components/layout/Layout";
import GoogleMapComponent from "@/components/map/GoogleMapComponent";
import EventsList from "@/components/events/EventsList";
import MobileEventSheet from "@/components/events/MobileEventSheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

const Map = () => {
  const isMobile = useIsMobile();
  
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("start_time", { ascending: true });

      if (error) throw error;
      return data as Tables<"events">[];
    },
  });

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
        {isMobile && <MobileEventSheet />}
      </div>
    </Layout>
  );
};

export default Map;