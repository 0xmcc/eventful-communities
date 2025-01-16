import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ThemeEditor } from "./ThemeEditor";
import { Settings } from "lucide-react";

export const ThemeEditorModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Theme Editor</DialogTitle>
          <DialogDescription>
            Customize the appearance of your events page using AI-generated styles.
          </DialogDescription>
        </DialogHeader>
        <ThemeEditor className="mt-4" />
      </DialogContent>
    </Dialog>
  );
}; 