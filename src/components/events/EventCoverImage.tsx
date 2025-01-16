import { Button } from "@/components/ui/button";
import { ImageIcon, Shuffle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface EventCoverImageProps {
  onImageChange: (file: File) => void;
}

export const EventCoverImage = ({ onImageChange }: EventCoverImageProps) => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getRandomImage = async () => {
    try {
      setIsLoading(true);
      const { data: { data: { publicUrl } } } = await supabase
        .functions.invoke('get-random-unsplash-image');

      if (publicUrl) {
        const response = await fetch(publicUrl);
        const blob = await response.blob();
        const file = new File([blob], 'random-cover.jpg', { type: 'image/jpeg' });
        onImageChange(file);
        setImagePreview(URL.createObjectURL(blob));
      }
    } catch (error) {
      console.error('Error fetching random image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={getRandomImage}
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          <Shuffle className="w-4 h-4" />
          Random Cover
        </Button>
      </div>
      
      <div 
        className="relative w-full h-[200px] rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => document.getElementById("cover-image")?.click()}
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Cover preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-secondary/10 flex flex-col items-center justify-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Click to upload cover image</p>
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white font-medium">Change cover image</p>
        </div>
        <input
          id="cover-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};