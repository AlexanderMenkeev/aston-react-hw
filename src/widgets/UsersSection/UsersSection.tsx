import { useSelector } from 'react-redux';
import { useGetUsersQuery, usersSelectors } from '../../entities/user/api/usersApi';
import UserCard from '../../entities/user/ui/UserCard/UserCard';
import ItemList from '../../shared/ui/ItemList/ItemList';
import styles from './UsersSection.module.css';

function UsersSection() {
  const { isLoading, error } = useGetUsersQuery();

  const allUsers = useSelector(usersSelectors.selectAll);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Пользователи ({allUsers.length})</h2>
      </div>
      <ItemList items={allUsers} component={UserCard} />
    </section>
  );
}

export default UsersSection;
