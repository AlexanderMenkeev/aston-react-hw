import type IPhoto from '../model/IPhoto';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ item: photo }: { item: IPhoto }) => {
  const backgroundHex = photo.url.split('/').pop();
  const photoUrl = `https://placehold.co/600/${backgroundHex}/white/png`;

  return (
    <article className={styles.photoCard}>
      <img src={photoUrl} alt={photo.title} loading="lazy" />
    </article>
  );
};

export default PhotoCard;
