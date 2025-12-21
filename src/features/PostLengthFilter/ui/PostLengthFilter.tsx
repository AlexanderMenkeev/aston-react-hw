import { memo } from 'react'; // 1. Import memo
import styles from './PostLengthFilter.module.css';

interface PostLengthFilterProps {
  postLength: string;
  setPostLength: (arg0: string) => void;
}

export const PostLengthFilter = memo(function PostLengthFilter({ postLength, setPostLength }: PostLengthFilterProps) {
  console.log('PostLengthFilter rendered!');

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="post-length" className={styles.label}>
        Максимальная длина заголовка:
      </label>
      <input
        id="post-length"
        className={styles.numberInput}
        type="number"
        value={postLength}
        placeholder="Введите длину"
        onChange={(e) => setPostLength(e.target.value)}
      />
    </div>
  );
});
