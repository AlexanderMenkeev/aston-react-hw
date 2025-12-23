import Modal from '../../shared/ui/Modal/Modal';
import styles from './AboutProjectModal.module.css';

export function AboutProjectModal() {
  return (
    <Modal>
      <Modal.Header>О проекте</Modal.Header>
      <Modal.Body>
        <p className={styles.description}>
          Приложение для просмотра постов и комментариев, созданное в рамках выполнения домашних заданий. <br /> Что
          использовано:
        </p>

        <ul className={styles.techList}>
          <li>Feature-Sliced Design (FSD)</li>
          <li>Redux toolkit</li>
          <li>RTK query</li>
          <li>React Portal</li>
          <li>CSS Modules</li>
          <li>lucide-react</li>
        </ul>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
