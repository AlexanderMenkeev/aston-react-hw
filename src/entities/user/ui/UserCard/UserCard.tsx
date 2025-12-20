import styles from './UserCard.module.css';
import type IUser from '../../model/IUser';
import { useNavigate } from 'react-router-dom';

// Маленькая карточка юзера, которая отображается в списке
const UserCard = ({ item: user }: { item: IUser }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <article className={styles.userCard}>
      <div onClick={handleCardClick} className={styles.content}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.username}>{user.username}</p>
      </div>
    </article>
  );
};

export default UserCard;
