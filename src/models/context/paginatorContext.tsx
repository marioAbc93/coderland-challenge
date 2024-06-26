import React, { createContext, useState, useMemo } from "react";
import {
  ListType,
  PaginationContextType,
  TasksType,
} from "../../models/entities";

export const PaginationContext = createContext<
  PaginationContextType | undefined
>(undefined);

export const PaginationProvider: React.FC<{
  children: React.ReactNode;
  data: ListType[] | TasksType[];
  itemsPerPage?: number;
}> = ({ children, data, itemsPerPage = 6 }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data, itemsPerPage]
  );

  const pagesButton = useMemo(() => {
    if (pages === 1) return null;
    const numberOfButtons = pages === 2 ? 2 : 3;
    const initialButton =
      selectedPage === 1
        ? 1
        : selectedPage === pages
        ? pages - 2
        : selectedPage - 1;

    return Array.from({ length: numberOfButtons }, (_, i) => {
      const pageNumber =
        numberOfButtons === 2 || pages === 3 ? i + 1 : initialButton + i;
      return (
        <button key={pageNumber} onClick={() => setSelectedPage(pageNumber)}>
          {pageNumber}
        </button>
      );
    });
  }, [selectedPage, pages]);

  return (
    <PaginationContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
        pages,
        pagesButton,
        data,
        itemsPerPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
