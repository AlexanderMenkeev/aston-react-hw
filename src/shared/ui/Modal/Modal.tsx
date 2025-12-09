import { createPortal } from 'react-dom';
import { useTheme } from '../../lib/theme/ThemeContext';
import styles from './Modal.module.css';
import { ModalContext } from '../../lib/modal/ModalContext';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const { isDarkTheme } = useTheme();

  if (!isOpen) return null;

  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className={`${styles.backdrop} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
        <div className={styles.content}>{children}</div>
      </div>
    </ModalContext.Provider>,
    modalRoot,
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
