import styles from './Tabs.module.css';
import { NavLink } from 'react-router-dom';

export interface Tab {
  to: string;
  label: string;
}

function Tabs(props: { tabs: Tab[] }) {
  const { tabs } = props;

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

export default Tabs;
