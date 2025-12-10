import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        &copy; {new Date().getFullYear()} Домашнее задание 3. Александр Менкеев
      </div>
    </footer>
  );
};
export default Footer;
