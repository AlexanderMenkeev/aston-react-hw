import type IComment from '../model/IComment';
import styles from './Comment.module.css';

function Comment({ item: comment }: { item: IComment }) {
  return (
    <div className={styles.commentItem}>
      <div className={styles.commentHeader}>
        {comment.name} <span className={styles.commentEmail}>({comment.email})</span>
      </div>
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
