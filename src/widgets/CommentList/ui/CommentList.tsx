import { useState } from 'react';
import styles from './CommentList.module.css';
import Button from '../../../shared/ui/Button/Button';
import type IComment from '../../../entities/comment/model/IComment';

export const CommentList = ({ comments }: { comments: IComment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

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
