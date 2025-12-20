import { X } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Modal.module.css';
import { toggleModal } from '../../lib/modal/modalSlice';
import { useAppDispatch } from '../../../app/providers/hooks';

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <h4 className={styles.title}>{children}</h4>
      <Button variant="icon" onClick={() => dispatch(toggleModal())}>
        <X size={24} />
      </Button>
    </div>
  );
};

export default ModalHeader;
