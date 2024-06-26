import { useState } from "react";
import Themes from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import AppContainer from "./components/app-container";
import { Theme, ThemeMode } from "./constants";
import { NotificationProvider } from "./models/context/notificationContext.tsx";
import { Provider } from "react-redux";
import { store } from "./models/redux/store.ts";
import { ModalProvider } from "./models/context/modalContext.tsx";
import { useRoutes } from "react-router-dom";
import routes from "./routes.tsx";
function App() {
  const [theme, setTheme] = useState<Theme>({
    themeMode: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  });

  const handleSetTheme = (themeMode: ThemeMode) => {
    setTheme((prevState) => ({ ...prevState, themeMode }));
  };
  const elements = useRoutes(routes);
  return (
    <Provider store={store}>
      <NotificationProvider>
        <ModalProvider>
          <ThemeProvider theme={Themes[theme.themeMode]}>
            <AppContainer theme={theme} setTheme={handleSetTheme}>
              {elements}
            </AppContainer>
          </ThemeProvider>
        </ModalProvider>
      </NotificationProvider>
    </Provider>
  );
}

export default App;
