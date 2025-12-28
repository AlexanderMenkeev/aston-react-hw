import type IAlbum from '../model/IAlbum';
import styles from './AlbumCard.module.css';

import { useNavigate } from 'react-router-dom';

const AlbumCard = ({ item: album }: { item: IAlbum }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/albums/${album.id}/photos`);
  };

  return (
    <article className={styles.albumCard}>
      <div onClick={handleCardClick} className={styles.content}>
        <h3 className={styles.title}>{album.title}</h3>
      </div>
    </article>
  );
};

export default AlbumCard;
