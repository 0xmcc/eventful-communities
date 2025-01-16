import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tables } from "@/integrations/supabase/types";

type EventCategory = Tables<"events">["category"];

const EVENT_CATEGORIES: EventCategory[] = [
  "Technology",
  "Music",
  "Arts",
  "Sports",
  "Food",
  "Business",
  "Education",
  "Other",
];

interface EventBasicInfoProps {
  name: string;
  description: string;
  category: EventCategory;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onCategoryChange: (value: EventCategory) => void;
}

export const EventBasicInfo = ({
  name,
  description,
  category,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
}: EventBasicInfoProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Event Name</Label>
        <Input
          id="name"
          placeholder="Give your event a catchy name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          required
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Tell people what your event is about"
          className="min-h-[120px] text-base"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select value={category} onValueChange={onCategoryChange} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {EVENT_CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};