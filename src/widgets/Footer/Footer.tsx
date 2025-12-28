import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        &copy; {new Date().getFullYear()} Домашние задания 5 и 6. Александр Менкеев
      </div>
    </footer>
  );
}
export default Footer;
