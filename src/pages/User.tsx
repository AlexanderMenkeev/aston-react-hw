import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../entities/user/api/usersApi';

function User() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetUserQuery(Number(id));

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  if (error) {
    return <div>Error fetching user</div>;
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
