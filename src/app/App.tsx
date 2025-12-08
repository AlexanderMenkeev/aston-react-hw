import MainLayout from '../shared/layouts/MainLayout';
import PostList, { type IPost } from '../widgets/PostList';
import { POSTS } from '../shared/mocks';
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { useState, useCallback } from 'react';
import Button from '../shared/ui/Button/Button';
import Modal from '../shared/ui/Modal';

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

function AboutProjectModal({ isModalOpen, handleCloseModal }) {
  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="О проекте">
      <p className="mb-4">
        Приложение для просмотра постов и комментариев, созданное в рамках выполнения домашних заданий.
      </p>
      <p>Что использовано:</p>
      <ul className="list-disc list-inside space-y-1 text-left">
        <li>Feature-Sliced Design (FSD)</li>
        <li>React Context: для смены темы</li>
        <li>React Portal: создание модальных окон, вынесенных за пределы DOM-дерева компонента</li>
        <li>Tailwind: для стилей</li>
        <li>lucide-react: для иконок </li>
      </ul>
      <div className="flex justify-end mt-6">
        <Button onClick={handleCloseModal}>Закрыть</Button>
      </div>
    </Modal>
  );
}

export default App;
