import { useContext } from "react";
import { PaginationContext } from "./paginatorContext";
import { PaginationContextType } from "../entities";

export const usePaginator = (): PaginationContextType => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};
