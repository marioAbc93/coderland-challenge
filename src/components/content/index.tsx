import { Container, ContainerHead, DataContainer } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Back } from "../../assets/icons";
import { useRoute } from "../../models/context/useRoute";

export default function Content({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();
  const { routeName } = useRoute();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container data-testid="container" ishome={isHome}>
      {!isHome && (
        <ContainerHead>
          <button onClick={handleBack}>{Back}</button>
          <span>{routeName}</span>
        </ContainerHead>
      )}
      <DataContainer routeName={routeName}>{children}</DataContainer>
    </Container>
  );
}
