import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EventsList from "./EventsList";

const MobileEventSheet = () => {
  return (
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
  );
};

export default MobileEventSheet;