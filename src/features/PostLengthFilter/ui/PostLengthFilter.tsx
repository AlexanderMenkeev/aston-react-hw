import styles from './PostLengthFilter.module.css';

export function PostLengthFilter({
  postLength,
  setPostLength,
}: {
  postLength: string;
  setPostLength: (arg0: string) => void;
}) {
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
}
