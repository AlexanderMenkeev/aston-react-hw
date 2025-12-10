import { useModal } from '../../lib/modal/ModalContext';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalFooter = ({ children }: { children?: React.ReactNode }) => {
  const { handleCloseModal } = useModal();

  return (
    <div className={styles.footer}>
      {children}
      <Button onClick={handleCloseModal}>Закрыть</Button>
    </div>
  );
};

export default ModalFooter;
