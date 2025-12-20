import Modal from '../../shared/ui/Modal/Modal';
import styles from './AboutProjectModal.module.css';

export function AboutProjectModal() {
  return (
    <Modal>
      <Modal.Header>О проекте</Modal.Header>
      <Modal.Body>
        <p className={styles.p}>
          Приложение для просмотра постов и комментариев, созданное в рамках выполнения домашних заданий.
        </p>
        <p>Что использовано:</p>
        <ul className={styles.techList}>
          <li>Feature-Sliced Design (FSD)</li>
          <li>React Context для смены темы и передачи данных внутри подкомпонентов модального окна</li>
          <li>React Portal для создания модального окна вне текущего DOM-дерева</li>
          <li>CSS Modules для стилизации</li>
          <li>lucide-react для иконок </li>
        </ul>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
