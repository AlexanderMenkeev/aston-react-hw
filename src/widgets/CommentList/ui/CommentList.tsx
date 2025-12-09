import { useState } from 'react';
import styles from './CommentList.module.css';
import Button from '../../../shared/ui/Button/Button';

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const CommentList = ({ comments }: { comments: IComment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.commentList}>
      <Button onClick={toggle}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'} ({comments.length})
      </Button>

      {isOpen && (
        <div className={styles.commentsContainer}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

function Comment({ comment }: { comment: IComment }) {
  return (
    <div className={styles.commentItem}>
      <div className={styles.commentHeader}>
        {comment.name} <span className={styles.commentEmail}>({comment.email})</span>
      </div>
      <p>{comment.body}</p>
    </div>
  );
}
