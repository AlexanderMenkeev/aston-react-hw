import MainLayout from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { useState } from 'react';
import { AboutProjectModal } from '../widgets/AboutProjectModal/AboutProjectModal';
import PostSection from '../widgets/PostSection/PostSection';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <ThemeProvider>
      <MainLayout onOpenModal={handleOpenModal}>
        <PostSection />
      </MainLayout>

      <AboutProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </ThemeProvider>
  );
};

export default App;
