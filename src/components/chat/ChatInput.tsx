import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
}

export const ChatInput = ({ value, onChange, onSubmit,disabled }: ChatInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your style changes..."
        disabled={disabled}
        className="message-input"
      />
      <Button type="submit" size="icon" disabled={disabled} className="message-input-button">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}; 