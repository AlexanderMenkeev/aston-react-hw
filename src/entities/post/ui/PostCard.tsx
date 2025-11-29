import type { IPost } from "../../../widgets/PostList";

interface PostCardProps {
  post: IPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button>Лайк</button>
      <button>Комментарии</button>
      <button>Поделиться</button>
    </div>
  );
};

export default PostCard;
