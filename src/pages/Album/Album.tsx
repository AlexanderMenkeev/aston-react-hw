import { NavLink, useParams } from 'react-router-dom';
import styles from './Album.module.css';
import { useGetAlbumQuery } from '../../entities/album/api/albumsApi';

function Album() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetAlbumQuery(Number(id));

  if (isLoading) {
    return <div>Loading album...</div>;
  }

  if (error) {
    return <div>Error fetching album</div>;
  }

  if (!data) {
    return <div>Album not found.</div>;
  }

  return (
    <div>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsList}>
          <NavLink
            className={({ isActive }) => `${styles.tabButton} ${isActive ? styles.active : styles.inactive}`}
            to={`photos`}
          >
            Загрузить все фото альбома
          </NavLink>
        </div>
      </div>

      <h1>Album Page</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default Album;
