import styles from './UserTabs.module.css';
import { NavLink } from 'react-router-dom';

export interface Tab {
  to: string;
  label: string;
}

const tabs: Tab[] = [
  {
    to: '/',
    label: 'Все посты',
  },
  {
    to: '/users',
    label: 'Все пользователи',
  },
];

function UserTabs() {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsList}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) => `${styles.tabButton} ${isActive ? styles.active : styles.inactive}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserTabs;
