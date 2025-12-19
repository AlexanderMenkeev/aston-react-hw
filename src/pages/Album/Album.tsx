import { NavLink, useParams } from 'react-router-dom';
// import { usePosts } from '../../features/PostList/model/hooks/usePosts';
// import type { IAlbum } from '../../entities/interfaces';
import styles from './Album.module.css';

function Album() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<IAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`);

  // if (isLoading) {
  //   return <div>Loading album...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching album: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Album not found.</div>;
  // }

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
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default Album;
