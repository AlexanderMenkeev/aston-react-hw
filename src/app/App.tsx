import MainLayout from '../shared/layouts/MainLayout';
import PostList, { type IPost } from '../widgets/PostList/PostList';
import { POSTS } from '../shared/mocks';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { useState, useCallback } from 'react';
import { AboutProjectModal } from '../widgets/AboutProjectModal/AboutProjectModal';

const App: React.FC = () => {
  const [posts] = useState<IPost[]>(POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);
  return (
    <ThemeProvider>
      <MainLayout onOpenModal={handleOpenModal}>
        <PostList posts={posts} />
      </MainLayout>

      <AboutProjectModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </ThemeProvider>
  );
};

export default App;
