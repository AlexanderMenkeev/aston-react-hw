import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import { useTheme } from '../../lib/theme/ThemeContext';

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
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isDarkTheme ? 'theme-dark' : 'theme-light'
      }`}
    >
      <div onClick={onClose} />

      <div
        className={
          'relative rounded-xl shadow-2xl w-full max-w-lg border transition-transform scale-100 duration-300 ' +
          (isDarkTheme ? 'bg-slate-800 border-slate-700' : 'border-slate-200 bg-white')
        }
      >
        <div
          className={
            'flex justify-between items-center p-5 border-b ' + (isDarkTheme ? 'border-slate-700' : 'border-slate-200')
          }
        >
          <h4 className={'text-xl font-bold ' + (isDarkTheme ? 'text-white' : 'text-slate-900')}>{title}</h4>
          <Button variant="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>

        <div className={'p-5 ' + (isDarkTheme ? 'text-slate-300' : 'text-slate-600')}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
