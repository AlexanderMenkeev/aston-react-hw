import styles from './PostCard.module.css';
import { useNavigate } from 'react-router-dom';
import type IPost from '../model/IPost';
import { useGetCommentsQuery } from '../../comment/api/commentsApi';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';

const PostCard = ({ post }: { post: IPost }) => {
  const { data, isLoading, error } = useGetCommentsQuery(post.id);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`);
  };

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error fetching comments: </div>;
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
