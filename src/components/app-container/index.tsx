import { AppContainer, ChildrenContainer } from "./styled";
import Header from "../header";
import Content from "../content";
import { AppContainerProps } from "../../constants";
import Notification from "../notification";
import { useNotification } from "../../models/context/useNotification";
const AppContainerComponent = ({
  theme,
  setTheme,
  children,
}: AppContainerProps): JSX.Element => {
  const { message, severity, open } = useNotification();

  return (
    <AppContainer>
      <Header
        data-testid="header"
        theme={theme.themeMode}
        setTheme={setTheme}
      />
      <ChildrenContainer data-testid="children-container">
        <Content data-testid="content">{children}</Content>
        <Notification
          severity={severity}
          message={message}
          open={open}
          data-testid="notification-container"
        />
      </ChildrenContainer>
    </AppContainer>
  );
};

export default AppContainerComponent;
