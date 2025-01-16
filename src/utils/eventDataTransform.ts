import { Tables } from "@/integrations/supabase/types";

interface EventFormData {
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

export const transformEventData = (
  data: EventFormData,
  coverImageUrl: string,
  latitude: number | null,
  longitude: number | null,
  creatorId: string
): Omit<Tables<"events">, "id" | "created_at" | "updated_at"> => {
  const eventDateTime = new Date(data.date!);
  const [hours, minutes] = data.time.split(":");
  eventDateTime.setHours(parseInt(hours), parseInt(minutes));

  return {
    name: data.name,
    description: data.description,
    category: data.category,
    address: data.address,
    latitude,
    longitude,
    start_time: eventDateTime.toISOString(),
    duration: data.duration,
    cover_image_url: coverImageUrl,
    creator_id: creatorId,
    is_public: true,
    community_id: null,
  };
};