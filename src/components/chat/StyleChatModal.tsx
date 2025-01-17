import React, { useState, useRef } from "react";
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
import { useCssUpdate } from "@/hooks/useCssUpdate";
import { handleChatSubmit } from "./helpers/chatSubmitHandler";
interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export const StyleChatModal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [editorContent, setEditorContent] = useState("");
  const hasTabSwitched = useRef(false);  // Add ref to track tab switch

  // Handler for streaming style updates
  /**
   * Handle streaming style updates by updating the theme editor in real-time
   * @param chunk - The chunk of style to update
   * @returns void
   */
  const handleStreamingUpdate = (chunk: string) => {
    // Update theme editor in real-time with chunks
    console.log("Streaming update", chunk);
    setEditorContent(prev => prev + chunk);
    
    // Only switch tab once during streaming
    if (!hasTabSwitched.current) {
      setActiveTab("editor");
      hasTabSwitched.current = true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Clear editor content before new submission
    setEditorContent("");
    hasTabSwitched.current = false;  // Reset the tab switch tracker
    
    handleChatSubmit(e, {
      input,
      isLoading,
      setMessages,
      setInput,
      setIsLoading,
      handleStreamingUpdate,
    });
  };

  // Use the existing CSS update hook
  const {
    handleGenerateCSS,
    isGenerating,
  } = useCssUpdate(
    input,
    () => {}, // We don't need to update textarea here
    undefined // No need for streaming updates in chat
  );


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
        <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
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
            <ThemeEditor initialContent={editorContent} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
    </div>
  );
}; 