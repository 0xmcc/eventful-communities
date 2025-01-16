import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";
import { Tables } from "@/integrations/supabase/types";
import { EventForm } from "@/components/events/EventForm";
import { useState, useEffect } from "react";

const CreateEvent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const user = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const checkProfile = async () => {
      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (profileData) {
          setProfile(profileData);
        }
      }
      setIsLoading(false);
    };

    checkProfile();
  }, [user]);

  const handleSubmit = async ({
    name,
    description,
    category,
    address,
    latitude,
    longitude,
    date,
    time,
    duration,
    coverImage,
  }: {
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
  }) => {
    if (!profile) {
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
        name,
        description,
        category,
        address,
        latitude,
        longitude,
        start_time: eventDateTime.toISOString(),
        duration,
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

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          Loading...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </Layout>
  );
};

export default CreateEvent;