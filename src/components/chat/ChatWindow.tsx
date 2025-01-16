import React, { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

interface ChatWindowProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export const ChatWindow = ({
  messages,
  input,
  onInputChange,
  onSubmit,
  isLoading
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-[500px] flex-col chat-container">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 message-list">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <ChatInput
          value={input}
          onChange={onInputChange}
          onSubmit={onSubmit}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}; 