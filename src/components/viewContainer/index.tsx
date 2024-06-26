import { useRouteName } from "../../models/context/useRoute";
import { ViewContainerComponent } from "./styled";

export default function ViewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { routeName } = useRouteName();
  return (
    <ViewContainerComponent routeName={routeName}>
      {children}
    </ViewContainerComponent>
  );
}
