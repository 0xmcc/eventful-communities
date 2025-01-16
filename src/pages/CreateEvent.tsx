import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";
import { Tables } from "@/integrations/supabase/types";
import { EventBasicInfo } from "@/components/events/EventBasicInfo";
import { EventDateTime } from "@/components/events/EventDateTime";
import { EventLocation } from "@/components/events/EventLocation";
import { EventCoverImage } from "@/components/events/EventCoverImage";

type EventCategory = Tables<"events">["category"];

const CreateEvent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const user = useUser();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Other" as EventCategory,
    address: "",
    latitude: null as number | null,
    longitude: null as number | null,
  });

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create an event",
        variant: "destructive",
      });
      return;
    }

    if (!date) {
      toast({
        title: "Date required",
        description: "Please select an event date",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Combine date and time
      const eventDateTime = new Date(date);
      const [hours, minutes] = time.split(":");
      eventDateTime.setHours(parseInt(hours), parseInt(minutes));

      // Upload image if exists
      let coverImageUrl = "";
      if (coverImage) {
        const fileExt = coverImage.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `event-covers/${fileName}`;

        const { error: uploadError, data } = await supabase.storage
          .from("images")
          .upload(filePath, coverImage);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("images").getPublicUrl(filePath);

        coverImageUrl = publicUrl;
      }

      // Create event
      const { error: eventError } = await supabase.from("events").insert({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        address: formData.address,
        latitude: formData.latitude,
        longitude: formData.longitude,
        start_time: eventDateTime.toISOString(),
        duration,
        cover_image_url: coverImageUrl,
        creator_id: user.id,
        is_public: true,
      } as Tables<"events">);

      if (eventError) throw eventError;

      toast({
        title: "Success",
        description: "Event created successfully",
      });

      navigate("/events");
    } catch (error) {
      console.error("Error creating event:", error);
      toast({
        title: "Error",
        description: "Failed to create event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
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
      </div>
    </Layout>
  );
};

export default CreateEvent;