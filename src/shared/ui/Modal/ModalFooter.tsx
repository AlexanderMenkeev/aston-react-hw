import { useModalContext } from '../../lib/modal/ModalContext';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalFooter = ({ children }: { children?: React.ReactNode }) => {
  const { onClose } = useModalContext();

  return (
    <div className={styles.footer}>
      {children}
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};

export default ModalFooter;
