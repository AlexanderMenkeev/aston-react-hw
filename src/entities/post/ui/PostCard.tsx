import { useTheme } from "../../../shared/lib/theme/ThemeContext";
import type { IPost } from "../../../widgets/PostList";

interface PostCardProps {
  post: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { isDarkTheme } = useTheme();
  return (
    <article
      className={
        "rounded-xl shadow-lg border flex flex-col h-full transition-all duration-300 hover:shadow-xl " +
        (isDarkTheme
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200")
      }
    >
      <div className="p-6 flex-grow">
        <h3
          className={
            "text-xl font-bold mb-2 leading-tight " +
            (isDarkTheme ? "text-white " : "text-slate-900")
          }
        >
          {post.title}
        </h3>

        <p
          className={
            "leading-relaxed text-sm " +
            (isDarkTheme ? "dark:text-slate-400" : "text-slate-600")
          }
        >
          {post.body}
        </p>
      </div>
    </article>
  );
};

export default PostCard;
