import { Link } from "react-router-dom";
import { NavigationProps } from "../../constants";
import { NavigationCardComponent } from "./styled";

export default function NavigationCard({ name, path }: NavigationProps) {
  return (
    <Link to={path} style={{ flex: 1, display: "flex" }}>
      <NavigationCardComponent>
        <span>{name}</span>
      </NavigationCardComponent>
    </Link>
  );
}
