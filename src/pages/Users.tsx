import { useSelector } from 'react-redux';
import { useGetUsersQuery, usersSelectors } from '../entities/user/api/usersApi';
import UserCard from '../entities/user/ui/UserCard';
import ItemList from '../shared/ui/ItemList/ItemList';

function Users() {
  const { isLoading, error } = useGetUsersQuery();

  const allUsers = useSelector(usersSelectors.selectAll);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  return (
    <div>
      <ItemList items={allUsers} component={UserCard} />
    </div>
  );
}

export default Users;
