import { useParams } from 'react-router-dom';
import { useGetPhotosQuery } from '../../entities/photo/api/photosApi';
import styles from './AlbumPhotos.module.css';
import ItemList from '../../shared/ui/ItemList/ItemList';
import PhotoCard from '../../entities/photo/ui/PhotoCard';

function AlbumPhotos() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPhotosQuery(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Фото ({data.length})</h2>
      </div>
      <ItemList items={data} component={PhotoCard} variant="grid" />
    </section>
  );
}

export default AlbumPhotos;
