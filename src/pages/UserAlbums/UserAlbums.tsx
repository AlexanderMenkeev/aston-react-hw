import { useParams } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../entities/album/api/albumsApi';
import ItemList from '../../shared/ui/ItemList/ItemList';
import AlbumCard from '../../entities/album/ui/AlbumCard';
import styles from './UserAlbums.module.css';

function UserAlbums() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetAlbumsQuery(Number(id));

  if (isLoading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Error fetching albums</div>;
  }

  if (!data) {
    return <div>Albums not found.</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Альбомы ({data.length})</h2>
      </div>
      <ItemList items={data} component={AlbumCard} />
    </section>
  );
}

export default UserAlbums;
