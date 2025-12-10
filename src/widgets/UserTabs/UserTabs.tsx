import React, { useState } from 'react';
import styles from './UserTabs.module.css';
import { NavLink } from 'react-router-dom';

export interface Tab {
  to: string;
  label: string;
}

const UserTabs: React.FC = () => {
  const generateRandomUserId = () => Math.floor(Math.random() * 10) + 1;
  const generateRandomAlbumId = () => Math.floor(Math.random() * 100) + 1;

  const [userId] = useState(generateRandomUserId);
  const [albumId] = useState(generateRandomAlbumId);

  const tabs: Tab[] = [
    {
      to: '/',
      label: 'Главная',
    },
    {
      to: '/posts',
      label: 'Все посты',
    },
    {
      to: `/users/${userId}`,
      label: 'Случайный пользователь',
    },
    {
      to: `/albums/${albumId}`,
      label: 'Случайный альбом',
    },
  ];

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
};

export default UserTabs;
