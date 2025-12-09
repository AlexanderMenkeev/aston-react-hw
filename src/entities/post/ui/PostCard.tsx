import type { IPost } from '../../../widgets/PostList/PostList';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={styles.postCard}>
      <div className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
      </div>
    </article>
  );
};

export default PostCard;
