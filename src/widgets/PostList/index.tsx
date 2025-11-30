import React from "react";
import PostCard from "../../entities/post/ui/PostCard";
import { useTheme } from "../../shared/lib/theme/ThemeContext";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: IPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const { isDarkTheme } = useTheme();
  return (
    <section className="py-8">
      <div className="mb-6">
        <h2
          className={
            "text-2xl font-bold " +
            (isDarkTheme ? "text-white " : "text-slate-900")
          }
        >
          Последние посты
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default PostList;
