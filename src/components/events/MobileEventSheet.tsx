import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EventsList from "./EventsList";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ThemeEditor } from "@/components/theme/ThemeEditor";
import { EventCountButton } from "./EventCountButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const MobileEventSheet = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { data: events } = useQuery({
    queryKey: ["events", searchQuery],
    queryFn: async () => {
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
        .order("start_time", { ascending: true })
        .ilike("name", `%${searchQuery}%`);

      if (error) throw error;
      return data;
    },
  });

  const eventCount = events?.length || 0;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          className="mobile-sheet-trigger fixed bottom-0 left-0 right-0 z-90 gap-2 group h-14 rounded-none events-container-bg-background rounded-t-xl"
          variant="secondary"
        >
          <span className="event-count">{eventCount} Events</span>
          <ChevronUp className="icon-chevron w-4 h-4 transition-transform group-hover:-translate-y-0.5 event-count-icon" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="bottom" 
        className="mobile-sheet h-[80vh] w-full !border-t-0 rounded-t-xl events-container-bg-background [&_button[type='button']]:hidden overflow-hidden"
      >
  <div 
  className="flex items-center justify-center gap-2 mb-4 text-muted-foreground cursor-pointer hover:text-foreground z-50 pointer-events-auto p-2"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ChevronDown clicked');
    setOpen(false);
  }}
  onTouchEnd={(e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ChevronDown touched', open);
    setOpen(false);
  }}
  role="button"
  tabIndex={0}
>
                    
          <span className="event-count">{eventCount} Events</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </div>
  
        <div className="mobile-sheet-content space-y-4 h-[calc(80vh-120px)] overflow-y-auto">
          <div className="mobile-sheet-search flex gap-2">
            <Input 
              type="search" 
              placeholder="Search events..." 
              className="search-input flex-1 search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select>
              <SelectTrigger className="date-filter w-[140px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent className="date-filter-content">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="events-list">
            <EventsList />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileEventSheet;