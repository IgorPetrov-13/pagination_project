export type TypePost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type TypePosts = TypePost[];

export type TypePostId = TypePost['id'];
