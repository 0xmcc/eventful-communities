import React, { useRef, useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";

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
const LOADING_MESSAGES = [
  "Consulting the style oracle...",
  "Mixing color potions...",
  "Weaving CSS magic...",
  "Summoning design inspiration...",
  "Polishing pixels...",
  "Calculating golden ratios...",
  "Aligning divs perfectly...",
  "Sprinkling design fairy dust...",
  "Brewing the perfect palette...",
  "Channeling creative energy...",
  "Asking the devs to do something...",
  "Lighting incense...",
  "Making a sacrifice to the design gods...",

];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  text: "Hi there! I'm your App Genie 🧞. Want to give Eventful a new look?  Cyberpunk theme? Spongebob vibe? Try something like:\n\n" +
        "• 'Make it cyberpunk themed'\n" +
        "• 'Give me a cozy forest vibe'\n" +
        "• 'Can you make it look like SpongeBob?'",
  sender: "ai"
};

export const ChatWindow = ({
  messages,
  input,
  onInputChange,
  onSubmit,
  isLoading,
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingMessageIndex((prev) => 
        prev === LOADING_MESSAGES.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="flex h-[500px] flex-col chat-container">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 message-list">
        <ChatMessage key="welcome" message={WELCOME_MESSAGE} />
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
          />
        ))}
        <div ref={messagesEndRef} />
        {isLoading && (
          <div className="chat-message ai flex items-center gap-2 animate-fade-in">
            <div className="animate-spin">
              <Loader2 className="h-4 w-4" />
            </div>
            <span className="text-sm text-muted-foreground">
              {LOADING_MESSAGES[loadingMessageIndex]}
            </span>
          </div>
        )}
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