import { Outlet } from 'react-router-dom';
import { useTheme } from '../../shared/lib/theme/ThemeContext';
import { AboutProjectModal } from '../../widgets/AboutProjectModal/AboutProjectModal';
import Footer from '../../widgets/LayoutFooter/Footer';
import Header from '../../widgets/LayoutHeader/Header';
import styles from './MainLayout.module.css';

function MainLayout() {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`${styles.mainLayout} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
        <AboutProjectModal />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
