import { useParams } from 'react-router-dom';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { ITodo } from '../entities/interfaces';

function UserTodos() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<ITodo[]>(
  //   `https://jsonplaceholder.typicode.com/users/${id}/todos?_limit=5`,
  // );

  // if (isLoading) {
  //   return <div>Loading todos...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching todos: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Todos not found.</div>;
  // }

  return (
    <div>
      <h1>UserTodos Page</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default UserTodos;
