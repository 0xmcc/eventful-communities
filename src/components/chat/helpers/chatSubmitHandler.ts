import { handleChatMessage } from "@/services/openai/features/chat/processor";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

interface ChatSubmitHandlerParams {
  input: string;
  isLoading: boolean;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleStreamingUpdate: (chunk: string) => void;

}
/**
 * Handle chat submission by 
 * - processing the input
 * - adding both user and AI messages to the chat
 * - handling style requests by switching to editor tab
 * @param e - The event
 * @param params - The parameters
 * @param input - The input
 * @param isLoading - The loading state
 * @param setMessages - The messages state
 * @param setInput - The input state
 * @param setIsLoading - The loading state
 * @param handleStreamingUpdate - The streaming update handler

 * @returns void
 */
export const handleChatSubmit = async (
  e: React.FormEvent,
  {
    input,
    isLoading,
    setMessages,
    setInput,
    setIsLoading,
    handleStreamingUpdate,

  }: ChatSubmitHandlerParams
) => {
  e.preventDefault();
  
  // Validate input
  if (!input.trim() || isLoading) return;

  // Create and add user message
  const userMessage: Message = {
    id: Date.now().toString(),
    text: input.trim(),
    sender: "user",
  };
  setMessages(prev => [...prev, userMessage]);
  setInput("");
  setIsLoading(true);

  try {
    // Process message and get AI response
    const response = await handleChatMessage(input, handleStreamingUpdate);
    if (!response) {
      throw new Error("No response received from chat service");
    }

    // Add AI response to chat
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: response.message || "Sorry, I couldn't process that request.",
      sender: "ai",
    };
    setMessages(prev => [...prev, aiResponse]);
 
  } catch (error) {
    // Handle errors gracefully
    const errorMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: error instanceof Error 
        ? `Error: ${error.message}`
        : "Sorry, I encountered an error processing your request.",
      sender: "ai",
    };
    
    setMessages(prev => [...prev, errorMessage]);
    console.error("Chat Error:", error);
  } finally {
    setIsLoading(false);
  }
}; 




  // const handleSubmit = async (e: React.FormEvent) => {
  //   // 1. Prevent default form submission
  //   e.preventDefault();
  //   if (!input.trim() || isLoading) return;

  //   // 2. Add user message to the chat
  //   const userMessage: Message = {
  //     id: Date.now().toString(),
  //     text: input,
  //     sender: "user",
  //   };

  //   // 3. Add user message to the chat, clear input, and set loading state
  //   setMessages(prev => [...prev, userMessage]);
  //   setInput("");
  //   setIsLoading(true);

  //   try {
  //     // 4. Process the chat message and get the AI response
  //     // Properties: message, styles, originalPrompt, isStyleRequest
  //     const response = await handleChatMessage(input, handleStreamingUpdate);
  //     console.log("AI response received", response);
  //     if (!response) {
  //       throw new Error("No response received from chat service");
  //     }
  //     // 5. Add AI response to the chat
  //     const aiResponse: Message = {
  //       id: (Date.now() + 1).toString(),
  //       text: response.message || "Sorry, I couldn't process that request.",
  //       sender: "ai",
  //     };
  //     setMessages(prev => [...prev, aiResponse]);
  //     console.log("AI response added to chat", aiResponse);
  //     // If styles were generated, show them in the theme editor
  //     if (response.isStyleRequest && response.styles) {
        
  //       // Switch to editor tab
  //       const tabsElement = document.querySelector('[data-value="editor"]');
  //       if (tabsElement instanceof HTMLElement) {
  //         tabsElement.click();
  //       }
  //     }

  //   } catch (error) {
  //     console.error("Chat Error:", error);
      
  //     // Provide more specific error message based on the error type
  //     const errorMessage: Message = {
  //       id: (Date.now() + 1).toString(),
  //       text: error instanceof Error 
  //         ? `Error: ${error.message}`
  //         : "Sorry, I encountered an error processing your request.",
  //       sender: "ai",
  //     };
      
  //     setMessages(prev => [...prev, errorMessage]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };