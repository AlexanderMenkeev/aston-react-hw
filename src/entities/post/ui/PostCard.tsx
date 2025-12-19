import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import styles from './PostCard.module.css';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../../../features/PostList/model/hooks/usePosts';
import type IComment from '../../comment/model/IComment';
import type IPost from '../model/IPost';

const PostCard = ({ post }: { post: IPost }) => {
  const { data, isLoading, error } = usePosts<IComment[]>(
    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
  );

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`);
  };

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error fetching comments: {error}</div>;
  }

  if (!data) {
    return <div>Comments not found.</div>;
  }

  return (
    <article className={styles.postCard}>
      <div onClick={handleCardClick} className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
        <CommentList comments={data} />
      </div>
    </article>
  );
};

export default PostCard;
