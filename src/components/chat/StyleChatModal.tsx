import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { ThemeEditor } from "../theme/ThemeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { analyzeChatMessage } from "@/services/openai/chatAnalyzer";
import { useCssUpdate } from "@/hooks/useCssUpdate";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export const StyleChatModal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Use the existing CSS update hook
  const {
    handleGenerateCSS,
    isGenerating,
  } = useCssUpdate(
    input,
    () => {}, // We don't need to update textarea here
    undefined // No need for streaming updates in chat
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const analysis = await analyzeChatMessage(input);

      // If it's a style request, use the existing CSS generation
      if (analysis.isStyleRequest) {
        await handleGenerateCSS();
      }

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: analysis.response,
        sender: "ai",
      };

      setMessages(prev => [...prev, aiResponse]);

      // If styles were generated, show them in the theme editor
      if (analysis.isStyleRequest && analysis.suggestedStyles) {
        // Switch to editor tab
        const tabsElement = document.querySelector('[data-value="editor"]');
        if (tabsElement instanceof HTMLElement) {
          tabsElement.click();
        }
      }

    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error processing your request.",
        sender: "ai",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-bg-background">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Style Chat</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="chat" className="mt-4">
          <TabsList>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="editor">Theme Editor</TabsTrigger>
          </TabsList>
          <TabsContent value="chat">
            <ChatWindow
              messages={messages}
              input={input}
              onInputChange={setInput}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </TabsContent>
          <TabsContent value="editor">
            <ThemeEditor />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
    </div>
  );
}; 