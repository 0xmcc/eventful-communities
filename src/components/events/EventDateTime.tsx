import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { useEffect } from "react";

interface EventDateTimeProps {
  date: Date | undefined;
  time: string;
  duration: string;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  onDurationChange: (duration: string) => void;
}

const DURATION_OPTIONS = [
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
];

export const EventDateTime = ({
  date,
  time,
  duration,
  onDateChange,
  onTimeChange,
  onDurationChange,
}: EventDateTimeProps) => {
  // Set default time to next hour rounded up
  useEffect(() => {
    if (!time) {
      const now = new Date();
      const nextHour = new Date(now.setHours(now.getHours() + 1, 0, 0));
      onTimeChange(format(nextHour, "HH:mm"));
    }
  }, [time, onTimeChange]);

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
        <Label>Start Time</Label>
        <div className="relative">
          <Input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            required
            className="pl-10"
          />
          <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Duration</Label>
        <Select value={duration} onValueChange={onDurationChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {DURATION_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option.replace(":", "h ")}m
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};