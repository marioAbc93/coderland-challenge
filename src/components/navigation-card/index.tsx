import { Link } from "react-router-dom";
import { NavigationProps } from "../../constants";

export default function NavigationCard({ name, path }: NavigationProps) {
  return (
    <Link to={path}>
      <div>
        <h2>{name}</h2>
      </div>
    </Link>
  );
}
