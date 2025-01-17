import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { ThemeEditor } from "../theme/ThemeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useThemeState } from "@/hooks/useThemeState";
import { handleChatSubmit } from "./helpers/chatSubmitHandler";
import { handleStreamingUpdate } from "./helpers/streamingHandler";

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
  const hasTabSwitched = useRef(false);
  
  const { theme, handleStreamingUpdate: updateTheme, applyTheme, resetTheme } = useThemeState();



  const handleStreamingWrapper = (chunk: string, accumulatedCSS: string, isComplete?: boolean) => {
    handleStreamingUpdate({
      chunk,
      accumulatedCSS,
      isComplete,
      updateTheme,
      applyTheme,
      setActiveTab,
      hasTabSwitched,
      currentTheme: theme
    });
//    console.log('Streaming update complete', isComplete);
    // Switch back to chat tab when streaming is complete
    if (isComplete) {
      console.log('Switching to chat tab');
      setActiveTab("chat");
      applyTheme(theme);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    hasTabSwitched.current = false;
    resetTheme(); // Reset theme before starting new request
    
    handleChatSubmit(e, {
      input,
      isLoading,
      setMessages,
      setInput,
      setIsLoading,
      handleStreamingUpdate: handleStreamingWrapper,
    });
  };

  return (

      <Dialog>

        {/* Dialog Trigger */}
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        {/* Dialog Content */}
        <DialogContent className="sm:max-w-[800px] chat-bg-background">
          <DialogHeader>
            <DialogTitle>Style Chat</DialogTitle>
          </DialogHeader>

          {/* Tabs for switching between chat and theme editor */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="chat" className="modal-tab-button" >Chat</TabsTrigger>
              <TabsTrigger value="editor" className="modal-tab-button" >Theme Editor</TabsTrigger>
            </TabsList>
            {/* Chat Tab */}
            <TabsContent value="chat">
              <ChatWindow
                messages={messages}
                input={input}
                onInputChange={setInput}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </TabsContent>

            {/* Theme Editor Tab */}
            <TabsContent value="editor">
              <ThemeEditor 
                initialContent={theme}
                onApplyTheme={applyTheme}
              />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

  );
}; 