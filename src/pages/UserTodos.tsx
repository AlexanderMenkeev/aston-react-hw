import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../entities/todo/api/todosApi';
import ItemList from '../shared/ui/ItemList/ItemList';
import TodoCard from '../entities/todo/ui/todoCard';

function UserTodos() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetTodosQuery(Number(id));

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (error) {
    return <div>Error fetching todos</div>;
  }

  if (!data) {
    return <div>Todos not found.</div>;
  }

  return <ItemList items={data} component={TodoCard} />;
}

export default UserTodos;
