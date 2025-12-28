import { useAppDispatch } from '../../../app/providers/hooks';
import { toggleModal } from '../../lib/modal/modalSlice';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalFooter = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.footer}>
      {children}
      <Button onClick={() => dispatch(toggleModal())}>Закрыть</Button>
    </div>
  );
};

export default ModalFooter;
