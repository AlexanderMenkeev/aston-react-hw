import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import { useTheme } from '../lib/theme/ThemeContext';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
  onOpenModal: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onOpenModal }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={`${styles.mainLayout} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <Header onOpenModal={onOpenModal} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
