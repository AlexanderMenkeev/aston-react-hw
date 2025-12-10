import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import { useTheme } from '../shared/lib/theme/ThemeContext';
import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import { useModal } from '../shared/lib/modal/ModalContext';
import { AboutProjectModal } from '../widgets/AboutProjectModal/AboutProjectModal';

function MainLayout() {
  const { isDarkTheme } = useTheme();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className={`${styles.mainLayout} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <Header handleOpenModal={handleOpenModal} />
      <main className={styles.mainContent}>
        <Outlet />
        <AboutProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
