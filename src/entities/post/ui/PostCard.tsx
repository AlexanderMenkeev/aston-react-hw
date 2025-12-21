import styles from './PostCard.module.css';
import { useNavigate } from 'react-router-dom';
import type IPost from '../model/IPost';
import { useGetCommentsQuery } from '../../comment/api/commentsApi';
import { CommentSection } from '../../../widgets/CommentSection/CommentSection';

const PostCard = ({ item: post }: { item: IPost }) => {
  const { data, isLoading, error } = useGetCommentsQuery(post.id);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <article className={styles.postCard}>
      <div onClick={handleCardClick} className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
        <CommentSection comments={data} />
      </div>
    </article>
  );
};

export default PostCard;
