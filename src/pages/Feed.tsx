import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import CoverImage from "@/components/feed/CoverImage";
import PostForm from "@/components/feed/PostForm";
import CommentCard from "@/components/feed/CommentCard";

const Feed = () => {
  const { data: comments, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("comments")
        .select(`
          id,
          content,
          image_url,
          created_at,
          event_id,
          event:events (
            name
          ),
          author:author_id (
            id,
            username
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <CoverImage />
      <div className="mx-auto px-4 py-8 chat-container feed-container">
        <PostForm />
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground">
            Failed to load comments. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Feed; 