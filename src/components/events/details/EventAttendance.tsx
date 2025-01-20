import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';

interface EventAttendanceProps {
  isPurchasing: boolean;
  isPurchased: boolean;
  onPurchase: () => void;
}

export const EventAttendance = ({ 
  isPurchasing, 
  isPurchased, 
  onPurchase 
}: EventAttendanceProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
          <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
        </div>
        <span className="text-sm text-muted-foreground">2 people going</span>
      </div>

      <Button 
        className="w-full" 
        size="lg"
        onClick={onPurchase}
        disabled={isPurchasing || isPurchased}
        variant="default"
      >
        {isPurchasing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : isPurchased ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            RSVP Confirmed!
          </>
        ) : (
          'RSVP'
        )}
      </Button>
    </div>
  );
}; 