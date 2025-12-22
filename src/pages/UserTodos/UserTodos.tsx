import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../../entities/todo/api/todosApi';
import ItemList from '../../shared/ui/ItemList/ItemList';
import styles from './UserTodos.module.css';
import TodoCard from '../../entities/todo/ui/TodoCard';

function UserTodos() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetTodosQuery(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Задачи ({data.length})</h2>
      </div>
      <ItemList items={data} component={TodoCard} />
    </section>
  );
}

export default UserTodos;
