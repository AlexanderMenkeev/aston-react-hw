import { NavLink, Outlet, useParams } from 'react-router-dom';
import type { Tab } from '../../widgets/UserTabs/UserTabs';
import styles from './UserLayout.module.css';

function MainLayout() {
  const { id } = useParams();

  const tabs: Tab[] = [
    {
      to: `/users/${id}/posts`,
      label: 'Посты пользователя',
    },
    {
      to: `/users/${id}/albums`,
      label: 'Альбомы пользователя',
    },
    {
      to: `/users/${id}/todos`,
      label: 'Задачи пользователя',
    },
  ];

  return (
    <>
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

      <Outlet />
    </>
  );
}

export default MainLayout;
