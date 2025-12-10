import { useEffect, useState } from 'react';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import styles from './PostCard.module.css';
import { NavLink } from 'react-router-dom';
import type { IPost } from '../../interfaces';

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
      <NavLink to={`/posts/${post.id}`} className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
        <CommentList comments={comments} />
      </NavLink>
    </article>
  );
};

export default PostCard;
