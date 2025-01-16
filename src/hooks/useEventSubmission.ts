import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { useGeocoding } from "@/hooks/useGeocoding";

interface EventSubmissionData {
  name: string;
  description: string;
  category: Tables<"events">["category"];
  address: string;
  latitude: number | null;
  longitude: number | null;
  date: Date | undefined;
  time: string;
  duration: string;
  coverImage: File | null;
}

export const useEventSubmission = (profile: Tables<"profiles"> | null) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { geocodeAddress } = useGeocoding();

  const handleSubmit = async (data: EventSubmissionData) => {
    if (!profile) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create an event",
        variant: "destructive",
      });
      return;
    }

    if (!data.date) {
      toast({
        title: "Date required",
        description: "Please select an event date",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Get coordinates from address if not provided
      let latitude = data.latitude;
      let longitude = data.longitude;
      
      if (!latitude || !longitude) {
        const geocodeResult = await geocodeAddress(data.address);
        if (geocodeResult) {
          latitude = geocodeResult.latitude;
          longitude = geocodeResult.longitude;
        }
      }

      // Combine date and time
      const eventDateTime = new Date(data.date);
      const [hours, minutes] = data.time.split(":");
      eventDateTime.setHours(parseInt(hours), parseInt(minutes));

      // Upload image if exists
      let coverImageUrl = "";
      if (data.coverImage) {
        const fileExt = data.coverImage.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `event-covers/${fileName}`;

        const { error: uploadError, data: uploadData } = await supabase.storage
          .from("images")
          .upload(filePath, data.coverImage);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("images").getPublicUrl(filePath);

        coverImageUrl = publicUrl;
      }

      // Create event
      const { error: eventError } = await supabase.from("events").insert({
        name: data.name,
        description: data.description,
        category: data.category,
        address: data.address,
        latitude,
        longitude,
        start_time: eventDateTime.toISOString(),
        duration: data.duration,
        cover_image_url: coverImageUrl,
        creator_id: profile.id,
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

  return { handleSubmit, isSubmitting };
};