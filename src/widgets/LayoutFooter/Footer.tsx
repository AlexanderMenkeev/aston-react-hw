import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        &copy; {new Date().getFullYear()} Домашнее задание 4. Александр Менкеев
      </div>
    </footer>
  );
}
export default Footer;
