import { createPortal } from 'react-dom';
import { useTheme } from '../../lib/theme/ThemeContext';
import styles from './Modal.module.css';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { useAppSelector } from '../../../app/providers/hooks';
import { selectIsModalOpen } from '../../lib/modal/modalSlice';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isDarkTheme } = useTheme();
  const isOpen = useAppSelector(selectIsModalOpen);

  if (!isOpen) return null;

  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <div className={`${styles.backdrop} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <div className={styles.content}>{children}</div>
    </div>,

    modalRoot,
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
