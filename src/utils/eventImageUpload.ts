import { supabase } from "@/integrations/supabase/client";

export const uploadEventCoverImage = async (coverImage: File): Promise<string> => {
  const fileExt = coverImage.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `event-covers/${fileName}`;

  const { error: uploadError, data: uploadData } = await supabase.storage
    .from("images")
    .upload(filePath, coverImage);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(filePath);

  return publicUrl;
};