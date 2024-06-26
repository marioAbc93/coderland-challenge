import { Outlet } from "react-router";
import { AppContainer } from "./styled";
export default function MainLayout() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}
