import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
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
  onGenerateNameClick: () => void;
  onGenerateDescriptionClick: () => void;
  isGeneratingName: boolean;
  isGeneratingDescription: boolean;
}

export const EventBasicInfo = ({
  name,
  description,
  category,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
  onGenerateNameClick,
  onGenerateDescriptionClick,
  isGeneratingName,
  isGeneratingDescription,
}: EventBasicInfoProps) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Input
            placeholder="Event Name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
            className="text-4xl font-bold border-none px-0 placeholder:text-muted-foreground/50"
          />
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onGenerateNameClick}
          disabled={isGeneratingName}
          className="shrink-0"
        >
          {isGeneratingName ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Textarea
              id="description"
              placeholder="Tell people what your event is about"
              className="min-h-[120px] text-base"
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              required
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onGenerateDescriptionClick}
            disabled={isGeneratingDescription}
            className="shrink-0 self-start"
          >
            {isGeneratingDescription ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4" />
            )}
          </Button>
        </div>
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