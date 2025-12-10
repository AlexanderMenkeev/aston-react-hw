import { X } from 'lucide-react';
import { useModal } from '../../lib/modal/ModalContext';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  const { handleCloseModal } = useModal();

  return (
    <div className={styles.header}>
      <h4 className={styles.title}>{children}</h4>
      <Button variant="icon" onClick={handleCloseModal}>
        <X size={24} />
      </Button>
    </div>
  );
};

export default ModalHeader;
