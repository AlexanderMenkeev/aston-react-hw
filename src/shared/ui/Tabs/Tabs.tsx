import styles from './Tabs.module.css';
import { NavLink } from 'react-router-dom';

export interface ITab {
  to: string;
  label: string;
  end?: boolean;
}

function Tabs(props: { tabs: ITab[] }) {
  const { tabs } = props;

  return (
    <ul className={styles.tabsList}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => `${styles.tabButton} ${isActive ? styles.active : styles.inactive}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </ul>
  );
}

export default Tabs;
