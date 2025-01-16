import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { PhotoStepProps } from "@/types/onboarding";

export const PhotoStep = ({ 
  user, 
  selectedFile, 
  previewUrl, 
  onFileSelect,
  onBack,
  loading 
}: PhotoStepProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Profile Picture</label>
        <div className="flex flex-col items-center space-y-4">
          <Avatar 
            className="w-24 h-24 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleAvatarClick}
          >
            <AvatarImage src={previewUrl} />
            <AvatarFallback>
              {user?.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <p className="text-sm text-muted-foreground">
            Click the circle to upload a profile picture
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1"
          disabled={loading}
        >
          {loading ? "Saving..." : "Complete Profile"}
        </Button>
      </div>
    </div>
  );
};