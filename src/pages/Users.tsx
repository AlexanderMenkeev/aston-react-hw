import { useGetUsersQuery } from '../entities/user/api/usersApi';

function Users() {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  if (!data) {
    return <div>Posts not found.</div>;
  }

  return <section>{JSON.stringify(data)}</section>;
}

export default Users;
