import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import { useTheme } from '../../lib/theme/ThemeContext';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const { isDarkTheme } = useTheme();
  if (!isOpen) return null;

  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }

  return createPortal(
    <div className={`${styles.backdrop} ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <div onClick={onClose} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <Button variant="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
