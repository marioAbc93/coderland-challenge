import {
  Container,
  ContainerHead,
  DataContainer,
  PaginationContainer,
  TitleContainer,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Back, Plus } from "../../assets/icons";
import { useRoute } from "../../models/context/useRoute";
import { useModal } from "../../models/context/useModal";
import Modal from "../modal";

export default function Content({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();
  const { routeName } = useRoute();
  const handleBack = () => {
    navigate(-1);
  };
  const { handleOpen } = useModal();
  return (
    <>
      <Container data-testid="container" ishome={isHome}>
        {!isHome && (
          <ContainerHead>
            <button onClick={handleBack}>{Back}</button>
            <TitleContainer>
              {routeName === "Tasks" && (
                <button onClick={() => handleOpen()}>
                  New Task <Plus />
                </button>
              )}
              <span>{routeName}</span>
            </TitleContainer>
          </ContainerHead>
        )}
        <DataContainer routeName={routeName}>{children}</DataContainer>
        {!isHome && <PaginationContainer>Hola</PaginationContainer>}
      </Container>
      <Modal />
    </>
  );
}
