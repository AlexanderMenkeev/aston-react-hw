import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoGroup}>
          <div className={styles.logo}>Logo</div>
          <span className={styles.title}>Проект</span>
        </div>

        <div className={styles.controls}>
          <Button onClick={onOpenModal}>О проекте</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
