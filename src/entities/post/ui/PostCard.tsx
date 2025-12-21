import { useEffect, useState } from 'react';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import type { IPost } from '../../../widgets/PostSection/PostSection';
import styles from './PostCard.module.css';

const PostCard = ({ post }: { post: IPost }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getComments();
  }, [post.id]);

  return (
    <article className={styles.postCard}>
      <div className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
        <CommentList comments={comments} />
      </div>
    </article>
  );
};

export default PostCard;
