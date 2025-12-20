import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/providers/hooks';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { toggleModal } from '../../shared/lib/modal/modalSlice';
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

function Header() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div onClick={handleLogoClick} className={styles.logo}>
          Logo
        </div>

        <Tabs tabs={headerTabs} />

        <div className={styles.controls}>
          <Button
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            О проекте
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
