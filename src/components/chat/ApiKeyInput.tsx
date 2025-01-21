import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key } from "lucide-react";

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  onSave: () => void;
}

export const ApiKeyInput = ({ apiKey, onApiKeyChange, onSave }: ApiKeyInputProps) => {
    // Check for existing API key on mount
    useEffect(() => {
        const existingKey = localStorage.getItem("openai_api_key");
        if (existingKey && !apiKey) {
            onApiKeyChange(existingKey);
        }
    }, []);

    const handleSave = () => {
        console.log('Saving API key:', apiKey);
        if (apiKey.trim().startsWith('sk-')) {
            onSave(apiKey);
        } else {
            alert('Please enter a valid OpenAI API key.');
        }
    };

  return (
    <div className="flex flex-col gap-2 mb-4 p-4 border rounded api-key-container">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">OpenAI API Key</label>
      </div>
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="Enter your OpenAI API key"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSave}>Save</Button>
      </div>
      <a 
        href="https://platform.openai.com/api-keys"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:text-blue-600 underline"
      >
        Get your API key from OpenAI →
      </a>
      <span className="text-xs text-muted-foreground">API keys are stored locally.</span>
    </div>
  );
}; 