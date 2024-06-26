import { AppRoutes } from "../../constants";
import NavigationCard from "../../components/navigation-card";
import ViewContainer from "../../components/viewContainer";

export default function HomeView() {
  return (
    <ViewContainer>
      {AppRoutes.map((route, index) => (
        <NavigationCard
          key={index}
          name={route.name}
          path={route.path}
          data-testid={`event-container-${index}`}
        />
      ))}
    </ViewContainer>
  );
}
