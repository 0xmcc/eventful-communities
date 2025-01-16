import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

interface EventCoverImageProps {
  onImageChange: (file: File) => void;
}

export const EventCoverImage = ({ onImageChange }: EventCoverImageProps) => {
  const [imagePreview, setImagePreview] = useState<string>("");

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

  return (
    <div 
      className="relative w-full h-[200px] mb-8 rounded-lg overflow-hidden cursor-pointer group"
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
  );
};