import { useState } from 'react';
import styles from './CommentSection.module.css';
import Button from '../../shared/ui/Button/Button';
import type IComment from '../../entities/comment/model/IComment';
import ItemList from '../../shared/ui/ItemList/ItemList';
import Comment from '../../entities/comment/ui/Comment';

export const CommentSection = ({ comments }: { comments: IComment[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.commentSection}>
      <Button onClick={toggle}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'} ({comments.length})
      </Button>

      {isOpen && <ItemList items={comments} component={Comment} />}
    </div>
  );
};
