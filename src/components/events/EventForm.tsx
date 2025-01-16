import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";
import { EventBasicInfo } from "./EventBasicInfo";
import { EventDateTime } from "./EventDateTime";
import { EventLocation } from "./EventLocation";
import { EventCoverImage } from "./EventCoverImage";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { addHours } from "date-fns";

type EventCategory = Tables<"events">["category"];

interface EventFormProps {
  onSubmit: (data: {
    name: string;
    description: string;
    category: EventCategory;
    address: string;
    latitude: number | null;
    longitude: number | null;
    date: Date | undefined;
    time: string;
    duration: string;
    coverImage: File | null;
  }) => Promise<void>;
  isSubmitting: boolean;
}

export const EventForm = ({ onSubmit, isSubmitting }: EventFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Other" as EventCategory,
    address: "",
    latitude: null as number | null,
    longitude: null as number | null,
  });

  const defaultDate = addHours(new Date(), 24);
  const [date, setDate] = useState<Date>(defaultDate);
  const [time, setTime] = useState(defaultDate.getHours().toString().padStart(2, '0') + ":00");
  const [duration, setDuration] = useState("01:00");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSuggestion = async () => {
    try {
      setIsGenerating(true);
      const { data, error } = await supabase.functions.invoke('generate-event-suggestions', {
        body: { 
          prompt: "Generate a creative event name and description for a new event." 
        }
      });

      if (error) throw error;

      if (data.suggestion) {
        const suggestion = data.suggestion;
        const nameMatch = suggestion.match(/Name:(.*?)(?=Description:|$)/s);
        const descriptionMatch = suggestion.match(/Description:(.*?)(?=$)/s);

        if (nameMatch?.[1] || descriptionMatch?.[1]) {
          setFormData(prev => ({
            ...prev,
            name: nameMatch?.[1]?.trim() || prev.name,
            description: descriptionMatch?.[1]?.trim() || prev.description
          }));
          toast({
            title: "AI Suggestion Generated",
            description: "The event details have been updated with AI suggestions.",
          });
        }
      }
    } catch (error) {
      console.error('Error generating suggestions:', error);
      toast({
        title: "Error",
        description: "Failed to generate AI suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
      date,
      time,
      duration,
      coverImage,
    });
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Create New Event</CardTitle>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={generateSuggestion}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Ask AI
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <EventCoverImage
            onImageChange={(file) => setCoverImage(file)}
          />
          
          <EventBasicInfo
            name={formData.name}
            description={formData.description}
            category={formData.category}
            onNameChange={(name) => setFormData((prev) => ({ ...prev, name }))}
            onDescriptionChange={(description) =>
              setFormData((prev) => ({ ...prev, description }))
            }
            onCategoryChange={(category) =>
              setFormData((prev) => ({ ...prev, category }))
            }
          />

          <EventDateTime
            date={date}
            time={time}
            duration={duration}
            onDateChange={setDate}
            onTimeChange={setTime}
            onDurationChange={setDuration}
          />

          <EventLocation
            address={formData.address}
            onAddressSelect={(address, lat, lng) =>
              setFormData((prev) => ({
                ...prev,
                address,
                latitude: lat,
                longitude: lng,
              }))
            }
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Event"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};