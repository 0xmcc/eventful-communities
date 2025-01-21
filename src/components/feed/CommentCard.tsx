import { Tables } from "@/integrations/supabase/types";

interface CommentCardProps {
  comment: Tables<"comments"> & {
    event: { name: string };
    author: { username: string };
    nickname: string;
  };
}

const CommentCard = ({ comment }: CommentCardProps) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md ai-message feed-card">
    <h2 className="text-xl font-semibold feed-comment-card-text">
      {comment.nickname ? `${comment.nickname}` : `${comment.author.username}`}
    </h2>
    <p className="feed-comment-card-text">{comment.content}</p>
    {comment.event_id && (
      <a href={`/events/${comment.event_id}`} className="text-blue-500 underline feed-comment-card-hyperlink">
        Event: {comment.event.name}
      </a>
    )}
    {comment.image_url && <img src={comment.image_url} alt="Comment" className="w-16 h-16 object-cover mt-2" />}
    <p className="text-sm text-gray-500">{new Date(comment.created_at).toLocaleString()}</p>
  </div>
);

export default CommentCard; 