import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: string;
    text: string;
    sender: "user" | "ai";
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "message-bubble",
        "flex w-fit flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        "max-w-[60%]",
        "break-words whitespace-pre-wrap",
        message.sender === "user" 
          ? "ml-auto bg-primary text-primary-foreground user-message" 
          : "bg-muted ai-message"
      )}
    >
      {message.text}
    </div>
  );
}; 