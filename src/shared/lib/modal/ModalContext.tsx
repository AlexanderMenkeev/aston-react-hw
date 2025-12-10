import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  isOpen: false,
  onClose: () => {},
});

export const useModalContext = () => {
  return useContext(ModalContext);
};
