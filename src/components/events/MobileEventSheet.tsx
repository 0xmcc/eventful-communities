import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EventsList from "./EventsList";
import { ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const MobileEventSheet = () => {
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("start_time", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const eventCount = events?.length || 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 gap-2 group"
          variant="secondary"
        >
          <span>{eventCount} Events</span>
          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <div className="space-y-4">
          <Input 
            type="search" 
            placeholder="Search events..." 
            className="w-full"
          />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["Today", "Tomorrow", "This Week", "This Month"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
          </div>
          <EventsList />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileEventSheet;