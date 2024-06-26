import React, { useState, createContext, ReactNode } from "react";

interface ModalContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleOpen: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const value = {
    open,
    setOpen,
    handleOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
