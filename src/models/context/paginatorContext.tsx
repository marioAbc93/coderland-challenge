import React, { createContext, useState, useMemo } from "react";
import {
  ListType,
  TasksType,
  PaginationContextType,
} from "../../models/entities";
import { Back, DoubleLeft, DoubleRight, Next } from "../../assets/icons";
import Button from "../../components/custom-button";

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
    if (pages < 2) return null;

    const buttons = [];

    buttons.push(
      <Button
        key="first"
        disabled={selectedPage === 1}
        onClick={() => setSelectedPage(1)}
        icon={DoubleLeft}
        color="primary"
      />
    );

    buttons.push(
      <Button
        key="prev"
        disabled={selectedPage === 1}
        onClick={() => setSelectedPage(selectedPage - 1)}
        icon={Back}
        color="primary"
      />
    );

    const startPage = Math.max(selectedPage - 1, 1);
    const endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          disabled={i === selectedPage}
          onClick={() => setSelectedPage(i)}
          color={i === selectedPage ? "secondary" : "primary"}
          description={i}
        />
      );
    }

    if (endPage < pages) {
      buttons.push(<span key="ellipsis">...</span>);

      buttons.push(
        <Button
          key={pages}
          onClick={() => setSelectedPage(pages)}
          color="primary"
          description={pages}
        />
      );
    }

    buttons.push(
      <Button
        key="next"
        disabled={selectedPage === pages}
        onClick={() => setSelectedPage(selectedPage + 1)}
        icon={Next}
        color="primary"
      />
    );

    buttons.push(
      <Button
        key="last"
        disabled={selectedPage === pages}
        onClick={() => setSelectedPage(pages)}
        icon={DoubleRight}
        color="primary"
      />
    );

    return buttons;
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
