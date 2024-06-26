import React, { useState, useMemo } from "react";
import { ListType, TasksType } from "../../models/entities";

interface PaginationProps {
  data: ListType[] | TasksType[];
  itemsPerPage?: number;
}

const Paginator: React.FC<PaginationProps> = ({ data, itemsPerPage = 10 }) => {
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

  return <div>{pagesButton}</div>;
};

export default Paginator;
