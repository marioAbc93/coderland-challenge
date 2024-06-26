import { Container, ContainerHead } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Back } from "../../assets/icons";
export default function Content({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const routeNames: { [key: string]: string } = {
    "/": "Home",
    "/tasks": "Tasks",
    "/list": "List",
  };

  const routeName = routeNames[location.pathname] || "Page";
  return (
    <Container data-testid="container" isHome={isHome}>
      {!isHome && (
        <ContainerHead>
          <button onClick={handleBack}>{Back}</button>
          <span>{routeName}</span>
        </ContainerHead>
      )}
      <div>{children}</div>
    </Container>
  );
}
