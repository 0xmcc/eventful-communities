import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { useGeocoding } from "@/hooks/useGeocoding";
import { uploadEventCoverImage } from "@/utils/eventImageUpload";
import { transformEventData } from "@/utils/eventDataTransform";

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

      // Upload image if exists
      let coverImageUrl = "";
      if (data.coverImage) {
        coverImageUrl = await uploadEventCoverImage(data.coverImage);
      }

      // Transform and save event data
      const eventData = transformEventData(
        data,
        coverImageUrl,
        latitude,
        longitude,
        profile.id
      );

      const { error: eventError } = await supabase
        .from("events")
        .insert(eventData);

      if (eventError) throw eventError;

      toast({
        title: "Success",
        description: "Event created successfully",
      });

      navigate("/");
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