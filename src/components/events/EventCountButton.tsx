import { Button } from "@/components/ui/button";

interface EventCountButtonProps {
  count: number;
}

export const EventCountButton = ({ count }: EventCountButtonProps) => {
  return (
    <Button 
      className="fixed top-4 left-4 z-50 h-10 px-4 rounded-full shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variant="outline"
      size="sm"
    >
      {count} Events
    </Button>
  );
}; 