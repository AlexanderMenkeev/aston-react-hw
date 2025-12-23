import { Outlet } from 'react-router-dom';
import { AboutProjectModal } from '../../widgets/AboutProjectModal/AboutProjectModal';
import Footer from '../../widgets/Footer/Footer';
import Header from '../../widgets/Header/Header';
import styles from './MainLayout.module.css';
import { useAppSelector } from '../../app/providers/hooks';
import { selectIsDarkTheme } from '../../shared/lib/theme/themeSlice';

function MainLayout() {
  const isDarkTheme = useAppSelector(selectIsDarkTheme);

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
