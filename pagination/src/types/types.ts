interface Reaction {
  likes: number;
  dislikes: number;
  views: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reaction;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
}
