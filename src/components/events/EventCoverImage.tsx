import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div className="space-y-4">
      <Label>Cover Image</Label>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          className="w-[120px]"
          onClick={() => document.getElementById("cover-image")?.click()}
        >
          <ImageIcon className="mr-2 h-4 w-4" />
          Upload
        </Button>
        <input
          id="cover-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="relative w-32 h-20 rounded-md overflow-hidden">
            <img
              src={imagePreview}
              alt="Cover preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};