import styles from './UserCard.module.css';
import type IUser from '../model/IUser';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ item: user }: { item: IUser }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <article className={styles.userCard}>
      <div onClick={handleCardClick} className={styles.content}>
        <h3 className={styles.postTitle}>{user.name}</h3>
        <p className={styles.postBody}>{user.username}</p>
      </div>
    </article>
  );
};

export default UserCard;
