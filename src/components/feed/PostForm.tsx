import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DEMO_USER } from "@/config/demoUser";

interface PostFormProps {
  eventId: string;
}

const PostForm = ({ eventId }: PostFormProps) => {
  const [newComment, setNewComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const queryClient = useQueryClient();

  const handlePost = async () => {
    if (!newComment.trim()) return;
    
    setIsPosting(true);
    try {
      const { error } = await supabase
        .from("comments")
        .insert({
          content: newComment.trim(),
          author_id: DEMO_USER.id,
          nickname: nickname.trim() || null,
        });

      if (error) throw error;

      setNewComment("");
      setNickname("");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="mb-8 p-4 border rounded chat-input">
      <input
        type="text"
        className="w-full p-2 mb-2 border rounded"
        placeholder="Nickname (optional)"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Textarea
        className="w-full p-2 mb-2 chat-input-textarea"
        placeholder="Share your thoughts..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button
        onClick={handlePost}
        disabled={isPosting || !newComment.trim()}
      >
        {isPosting ? "Posting..." : "Post"}
      </Button>
    </div>
  );
};

export default PostForm; 