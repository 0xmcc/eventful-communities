import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface EventDateTimeProps {
  date: Date | undefined;
  time: string;
  duration: string;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  onDurationChange: (duration: string) => void;
}

export const EventDateTime = ({
  date,
  time,
  duration,
  onDateChange,
  onTimeChange,
  onDurationChange,
}: EventDateTimeProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label>Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Start Time</Label>
        <Input
          id="time"
          type="time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
          required
          className="text-base"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration</Label>
        <Input
          id="duration"
          type="time"
          value={duration}
          onChange={(e) => onDurationChange(e.target.value)}
          required
          className="text-base"
        />
      </div>
    </div>
  );
};