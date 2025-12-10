import React, { createContext, useContext, useState } from 'react';

interface IModalContext {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal }}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ModalProvider');
  }
  return context;
}
