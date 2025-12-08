import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';
import styles from './AboutProjectModal.module.css';

export function AboutProjectModal({ isModalOpen, handleCloseModal }) {
  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="О проекте">
      <p className={styles.p}>
        Приложение для просмотра постов и комментариев, созданное в рамках выполнения домашних заданий.
      </p>
      <p>Что использовано:</p>
      <ul className={styles.techList}>
        <li>Feature-Sliced Design (FSD)</li>
        <li>React Context: для смены темы</li>
        <li>React Portal: создание модальных окон, вынесенных за пределы DOM-дерева компонента</li>
        <li>Tailwind: для стилей</li>
        <li>lucide-react: для иконок </li>
      </ul>
      <div className={styles.footer}>
        <Button onClick={handleCloseModal}>Закрыть</Button>
      </div>
    </Modal>
  );
}
