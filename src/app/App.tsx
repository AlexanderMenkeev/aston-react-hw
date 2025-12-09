import MainLayout from '../shared/layouts/MainLayout';
import PostList, { type IPost } from '../widgets/PostList/PostList';
import { POSTS } from '../shared/mocks';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { useState } from 'react';
import { AboutProjectModal } from '../widgets/AboutProjectModal/AboutProjectModal';

const App: React.FC = () => {
  const [posts] = useState<IPost[]>(POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <ThemeProvider>
      <MainLayout onOpenModal={handleOpenModal}>
        <PostList posts={posts} />
      </MainLayout>

      <AboutProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </ThemeProvider>
  );
};

export default App;
