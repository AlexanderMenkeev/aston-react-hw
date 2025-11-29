import PostCard from "../../entities/post/ui/PostCard";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: IPost[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      <h2>Список постов</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
