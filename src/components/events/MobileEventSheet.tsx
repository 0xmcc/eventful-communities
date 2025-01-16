import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EventsList from "./EventsList";
import { ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <SheetContent 
        side="bottom" 
        className="h-[80vh] w-full !border-t-0 rounded-t-xl"
      >
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input 
              type="search" 
              placeholder="Search events..." 
              className="flex-1"
            />
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <EventsList />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileEventSheet;