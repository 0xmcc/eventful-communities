import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
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
  const [isGeneratingName, setIsGeneratingName] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);

  const generateSuggestion = async (field: 'name' | 'description') => {
    const isName = field === 'name';
    const setGenerating = isName ? setIsGeneratingName : setIsGeneratingDescription;
    
    try {
      setGenerating(true);
      const { data, error } = await supabase.functions.invoke('generate-event-suggestions', {
        body: { 
          field,
          currentName: formData.name,
          currentDescription: formData.description,
        }
      });

      if (error) throw error;

      if (data.suggestion) {
        setFormData(prev => ({
          ...prev,
          [field]: data.suggestion.trim()
        }));
        
        toast({
          title: "AI Suggestion Generated",
          description: `The event ${field} has been updated with AI suggestions.`,
        });
      }
    } catch (error) {
      console.error('Error generating suggestions:', error);
      toast({
        title: "Error",
        description: `Failed to generate AI suggestions for ${field}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
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
        <CardTitle className="text-2xl font-bold">Create New Event</CardTitle>
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
            onGenerateNameClick={() => generateSuggestion('name')}
            onGenerateDescriptionClick={() => generateSuggestion('description')}
            isGeneratingName={isGeneratingName}
            isGeneratingDescription={isGeneratingDescription}
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