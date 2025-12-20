import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import Tabs, { type Tab } from '../../shared/ui/Tabs/Tabs';
import styles from './Header.module.css';

const headerTabs: Tab[] = [
  {
    to: '/',
    label: 'Все посты',
  },
  {
    to: '/users',
    label: 'Все пользователи',
  },
];

function Header({ handleOpenModal }: { handleOpenModal: () => void }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoGroup}>
          <div className={styles.logo}>Logo</div>
          <span className={styles.title}>Проект</span>
        </div>

        <Tabs tabs={headerTabs} />

        <div className={styles.controls}>
          <Button onClick={handleOpenModal}>О проекте</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
