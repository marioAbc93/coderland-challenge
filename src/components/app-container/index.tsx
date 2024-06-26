import { AppContainer, ChildrenContainer } from "./styled";
import Header from "../header";
import Content from "../content";
import { AppContainerProps } from "../../constants";
import Notification from "../notification";
import BetContainer from "../bet-container";
import { useNotification } from "../../models/context/useNotification";
import { useTicket } from "../../models/context/useTicket";
const AppContainerComponent = ({
  theme,
  setTheme,
}: AppContainerProps): JSX.Element => {
  const { message, severity, open } = useNotification();
  const { openTicket } = useTicket();

  return (
    <AppContainer>
      <Header
        data-testid="header"
        theme={theme.themeMode}
        setTheme={setTheme}
      />
      <ChildrenContainer data-testid="children-container">
        <Content data-testid="content" />
        <Notification
          severity={severity}
          message={message}
          open={open}
          data-testid="notification-container"
        />
        <BetContainer show={openTicket} data-testid="bet-container" />
      </ChildrenContainer>
    </AppContainer>
  );
};

export default AppContainerComponent;
