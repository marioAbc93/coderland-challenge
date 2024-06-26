import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouteNames, RouteProviderProps } from "../../constants";

const routeNames: RouteNames = {
  "/": "Home",
  "/tasks": "Tasks",
  "/list": "List",
};

export const RouteContext = createContext({
  routeName: "Page",
});

export const RouteProvider = ({ children }: RouteProviderProps) => {
  const location = useLocation();
  const [routeName, setRouteName] = useState("Page");

  useEffect(() => {
    setRouteName(routeNames[location.pathname] || "Page");
  }, [location]);

  return (
    <RouteContext.Provider value={{ routeName }}>
      {children}
    </RouteContext.Provider>
  );
};
