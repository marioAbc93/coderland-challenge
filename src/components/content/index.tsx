import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../models/redux/tasks";
import { useRouteName } from "../../models/context/useRoute";
import { useModal } from "../../models/context/useModal";
import Modal from "../modal";
import Paginator from "../paginator";
import {
  Container,
  ContainerHead,
  DataContainer,
  PaginationContainer,
  TitleContainer,
} from "./styled";
import { Back, Plus } from "../../assets/icons";
import { listSelector } from "../../models/redux/list";
import { ListType, TasksType } from "../../models/entities";
import { RootState } from "../../models/redux";

function selectData(
  routeName: string,
  state: RootState
): TasksType[] | ListType[] {
  if (routeName === "Tasks") {
    return tasksSelector(state) as TasksType[];
  }
  return listSelector(state) as ListType[];
}

export default function Content({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { routeName } = useRouteName();
  const data = useSelector((state: RootState) => selectData(routeName, state));

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { handleOpen } = useModal();

  return (
    <>
      <Container data-testid="container" ishome={isHome}>
        {!isHome && (
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
        {!isHome && data.length > 10 && (
          <PaginationContainer>
            <Paginator data={data} itemsPerPage={10} />
          </PaginationContainer>
        )}
      </Container>
      <Modal />
    </>
  );
}
