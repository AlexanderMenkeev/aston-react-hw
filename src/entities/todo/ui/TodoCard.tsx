import type ITodo from '../model/ITodo';
import styles from './TodoCard.module.css';

const TodoCard = ({ item: todo }: { item: ITodo }) => {
  return (
    <article className={styles.todoCard}>
      <div className={styles.content}>
        <h3 className={styles.title}>{todo.title}</h3>
        <p className={styles.status}>{todo.completed ? 'completed' : 'open'} task</p>
      </div>
    </article>
  );
};

export default TodoCard;
