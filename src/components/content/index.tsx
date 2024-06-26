import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRouteName } from "../../models/context/useRoute";
import { useModal } from "../../models/context/useModal";
import { usePaginator } from "../../models/context/usePaginator";
import Modal from "../modal";
import {
  Container,
  ContainerHead,
  DataContainer,
  PaginationContainer,
  TitleContainer,
} from "./styled";
import { Back, Plus } from "../../assets/icons";
import { tasksSelector } from "../../models/redux/tasks";
import { useSelector } from "react-redux";
import { listSelector } from "../../models/redux/list";

export default function Content({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { routeName } = useRouteName();
  const { pages, pagesButton, itemsPerPage } = usePaginator();
  const tasks = useSelector(tasksSelector);
  const list = useSelector(listSelector);

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { handleOpen } = useModal();

  const showTaskPagination =
    routeName === "Tasks" && pages > 1 && tasks.length > 1;

  const showListPagination =
    routeName === "List" && pages > 1 && list.length > 1;
  console.log(itemsPerPage);
  return (
    <>
      <Container data-testid="container" ishome={isHome}>
        {!isHome && pages > 1 && (
          <ContainerHead>
            <button onClick={handleBack}>{Back}</button>
            <TitleContainer>
              {routeName === "Tasks" && (
                <button onClick={handleOpen}>
                  New Task <Plus />
                </button>
              )}
              <span>{routeName}</span>
            </TitleContainer>
          </ContainerHead>
        )}
        <DataContainer routeName={routeName}>{children}</DataContainer>
        {!isHome && (showTaskPagination || showListPagination) && (
          <PaginationContainer>{pagesButton}</PaginationContainer>
        )}
      </Container>
      <Modal />
    </>
  );
}
