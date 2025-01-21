import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface OpenAIKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpenAIKeyModal = ({ isOpen, onClose }: OpenAIKeyModalProps) => {
  const [apiKey, setApiKey] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('Input value:', value);
    console.log('Current apiKey state:', apiKey);
    console.log('Starts with sk-:', value.trim().startsWith('sk-'));
    setApiKey(value);
  };

  useEffect(() => {
    console.log('apiKey state updated:', apiKey);
    console.log('Button should be enabled:', apiKey.trim().startsWith('sk-'));
  }, [apiKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit clicked with key:', apiKey);
    if (apiKey.trim().startsWith('sk-')) {
      localStorage.setItem('openai_api_key', apiKey.trim());
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>OpenAI API Key Required</DialogTitle>
          <DialogDescription>
            Please enter your OpenAI API key to use this feature. Your key will be stored locally in your browser.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <a 
                href="https://platform.openai.com/api-keys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center"
              >
                Get your API key here
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <Input
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={handleChange}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored locally and never sent to our servers.
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!apiKey.trim().startsWith('sk-')}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OpenAIKeyModal; 