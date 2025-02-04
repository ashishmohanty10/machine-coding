import { Post } from "../types/types";

export const SinglePost = ({ post }: { post: Post }) => {
  return (
    <div className="single-posts">
      <h3>{post.title}</h3>
      <p>{post.tags.join(", ")}</p>
      <p>Likes: {post.reactions.likes}</p>
    </div>
  );
};
