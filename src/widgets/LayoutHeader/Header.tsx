import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import UserTabs from '../UserTabs/UserTabs';
import styles from './Header.module.css';

function Header({ handleOpenModal }: { handleOpenModal: () => void }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoGroup}>
          <div className={styles.logo}>Logo</div>
          <span className={styles.title}>Проект</span>
        </div>

        <UserTabs />

        <div className={styles.controls}>
          <Button onClick={handleOpenModal}>О проекте</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
