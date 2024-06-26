import React, { useState, createContext, ReactNode } from "react";
import { SelectionType } from "../entities";

interface ModalContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string | null;
  price: number | null;
  selection: SelectionType | null;
  handleSelect: (item: SelectionType) => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [selection, setSelection] = useState<SelectionType | null>(null);

  const handleSelect = (item: SelectionType) => {
    setOpen(true);
    setName(item.name);
    setPrice(item.price);
    setSelection(item);
  };

  const value = {
    open,
    setOpen,
    name,
    price,
    selection,
    handleSelect,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
