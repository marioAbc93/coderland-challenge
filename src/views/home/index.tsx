import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../constants";
import NavigationCard from "../../components/navigation-card";

export default function HomeView() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    document.title = `${pathname} - MB Tasks`;
  }, [pathname]);

  return (
    <div>
      {AppRoutes.map((route, index) => (
        <NavigationCard
          key={index}
          name={route.name}
          path={route.path}
          data-testid={`event-container-${index}`}
        />
      ))}
    </div>
  );
}
