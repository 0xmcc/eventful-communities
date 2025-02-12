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
import { MessageSquare, Sparkles, Lamp, Key, ChevronDown } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { ThemeEditor } from "../theme/ThemeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useThemeState } from "@/hooks/useThemeState";
import { handleChatSubmit } from "./helpers/chatSubmitHandler";
import { handleStreamingUpdate } from "./helpers/streamingHandler";
import { GenieIcon } from "@/components/icons/GenieIcon";
import { ApiKeyInput } from "./ApiKeyInput";

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
  const [open, setOpen] = useState(false);
  const [showTapMe, setShowTapMe] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyModal, setShowApiKeyModal] = useState(true);
  
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
      console.log('Switching to chat tab and applying theme');
      applyTheme(theme);
      setActiveTab("chat");
      applyTheme(accumulatedCSS);
      // Close the modal after a short delay
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 1500); // 1.5 second delay to let user see the completion
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

  const handleApiKeySave = () => {
    console.log('API key saved:', apiKey);
    localStorage.setItem("openai_api_key", apiKey);
    console.log('API key saved to localStorage:', localStorage.getItem("openai_api_key"));
    setShowApiKeyModal(false);
  };

  return (

      <Dialog 
        open={open} 
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen) setShowTapMe(false);
        }}
      >

        {/* Dialog Trigger */}
        <DialogTrigger asChild>
          <div className="fixed bottom-4 right-4 flex flex-col items-center">
            <Button 
              variant="default" 
              size="icon"
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-yellow-400 hover:bg-yellow-500 z-50 h-16 w-16 chat-button"
            >
              <GenieIcon className="w-12 h-12 text-purple-600 chat-button-icon" />   
            </Button>
            {showTapMe && (
              <span className="text-xs mt-1 text-muted-foreground animate-bounce">Tap Me!</span>
            )}
          </div>
        </DialogTrigger>
        {/* Dialog Content */}
        {/* if you want, you can go back to chat-container or chat-bg-background */}
        <DialogContent className="sm:max-w-[800px] message-list chat-container flex flex-col max-h-[80vh]">
          <DialogHeader className="sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowApiKeyModal(!showApiKeyModal)}
                className="chat-action"
              >
                <Key className="h-4 w-4" />
              </Button>
              <DialogTitle className="chat-title-text">
                Chat
              </DialogTitle>
            </div>
            {showApiKeyModal && (
              <div className="mt-2">
                <ApiKeyInput 
                  apiKey={apiKey}
                  onApiKeyChange={setApiKey}
                  onSave={handleApiKeySave}
                />
              </div>
            )}
          </DialogHeader>

          {/* Make the tabs container scrollable */}
          <div className="flex-1 overflow-y-auto">

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* <TabsList>
                <TabsTrigger value="chat" className="modal-tab-button" >Chat</TabsTrigger>
                <TabsTrigger value="editor" className="modal-tab-button" >Theme Editor</TabsTrigger>
              </TabsList> */}
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
          </div>
        </DialogContent>
      </Dialog>

  );
}; 