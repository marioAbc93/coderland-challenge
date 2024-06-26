import { createContext, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { listSelector } from "../redux/list";
import { tasksSelector } from "../redux/tasks";

interface PaginationProviderProps {
  children: React.ReactNode;
  dataType: "tasks" | "list";
}
const PaginationContext = createContext({
  selectedPage: 1,
  setSelectedPage: () => {},
  pages: 0,
  pagesButton: [],
});

export const PaginationProvider = ({
  children,
  dataType,
}: PaginationProviderProps) => {
  const data = useSelector(dataType === "tasks" ? tasksSelector : listSelector);
  const [selectedPage, setSelectedPage] = useState(1);

  const pages = useMemo(() => Math.ceil(data.length / 10), [data]);

  const pagesButton = useMemo(() => {
    if (pages === 1) return null;
    const numberOfButtons = pages === 2 ? 2 : 3;
    const arrayRef = new Array(numberOfButtons);
    const initialButton =
      selectedPage === 1
        ? 1
        : selectedPage === pages
        ? pages - 2
        : selectedPage - 1;

    for (let i = 0; i < numberOfButtons; i++) {
      arrayRef[i] =
        numberOfButtons === 2 || pages === 3 ? i + 1 : initialButton + i;
    }

    return arrayRef.map((value) => (
      <button onClick={() => setSelectedPage(value)} key={value}>
        {value}
      </button>
    ));
  }, [selectedPage, pages]);

  return (
    <PaginationContext.Provider
      value={{ selectedPage, setSelectedPage, pages, pagesButton }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
