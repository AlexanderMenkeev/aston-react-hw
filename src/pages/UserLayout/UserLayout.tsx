import { Outlet, useParams } from 'react-router-dom';
import type { Tab } from '../../shared/ui/Tabs/Tabs';
import Tabs from '../../shared/ui/Tabs/Tabs';
import styles from './UserLayout.module.css';

function UserLayout() {
  const { id } = useParams();

  const tabs: Tab[] = [
    {
      to: `/users/${id}`,
      label: 'Пользователь',
      end: true,
    },
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
      <Tabs tabs={tabs} />
      <div className={styles.userContent}>
        <Outlet />
      </div>
    </>
  );
}

export default UserLayout;
