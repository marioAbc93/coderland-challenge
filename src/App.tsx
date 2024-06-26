import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme, ThemeMode } from "./constants";
import { ListType, TasksType } from "./models/entities/index.ts";
import Themes from "./theme/theme.ts";
import AppContainer from "./components/app-container";
import { RootState, store } from "./models/redux/store.ts";
import { tasksSelector } from "./models/redux/tasks/selector.ts";
import { listSelector } from "./models/redux/list/selector.ts";
import { PaginationProvider } from "./models/context/paginatorContext.tsx";
import { NotificationProvider } from "./models/context/notificationContext.tsx";
import { ModalProvider } from "./models/context/modalContext.tsx";
import { RouteProvider } from "./models/context/routeContext.tsx";
import { useRouteName } from "./models/context/useRoute.ts";
import routes from "./routes.tsx";

function selectData(
  routeName: string,
  state: RootState
): TasksType[] | ListType[] {
  if (routeName === "Tasks") {
    return tasksSelector(state) as TasksType[];
  }
  return listSelector(state) as ListType[];
}

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
  const { routeName } = useRouteName();
  const [data, setData] = useState<TasksType[] | ListType[]>([]);

  useEffect(() => {
    setData(selectData(routeName, store.getState()));
  }, [routeName]);
  return (
    <Provider store={store}>
      <NotificationProvider>
        <PaginationProvider data={data}>
          <ModalProvider>
            <RouteProvider>
              <ThemeProvider theme={Themes[theme.themeMode]}>
                <AppContainer theme={theme} setTheme={handleSetTheme}>
                  {elements}
                </AppContainer>
              </ThemeProvider>
            </RouteProvider>
          </ModalProvider>
        </PaginationProvider>
      </NotificationProvider>
    </Provider>
  );
}

export default App;
