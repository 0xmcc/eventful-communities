import { useState } from "react";

const PostForm = () => {
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    console.log("Posting comment:", newComment);
    setNewComment("");
  };

  return (
    <div className="mb-8 p-4 border rounded chat-input">
      <textarea
        className="w-full p-2 border rounded mb-2 chat-input-textarea"
        placeholder="Share your thoughts..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="bg-primary text-white px-4 py-2 rounded"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default PostForm; 