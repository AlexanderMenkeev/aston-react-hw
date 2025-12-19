import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../entities/todo/api/todosApi';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { ITodo } from '../entities/interfaces';

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

  return (
    <div>
      <h1>UserTodos Page</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default UserTodos;
