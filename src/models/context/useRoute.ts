import { useContext } from "react";
import { RouteContext } from "./routeContext";

export const useRouteName = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error(
      "useRoute debe usarse dentro del proveedor de RouteContext"
    );
  }
  return context;
};
