import { useParams } from 'react-router-dom';
import type { IUser } from '../entities/interfaces';
import { usePosts } from '../features/PostList/model/hooks/usePosts';

function User() {
  const { id } = useParams();

  const { data, isLoading, error } = usePosts<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  if (error) {
    return <div>Error fetching user: {error}</div>;
  }

  if (!data) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>User Page</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default User;
