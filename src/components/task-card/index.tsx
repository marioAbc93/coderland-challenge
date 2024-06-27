import { TaskCardProps } from "../../constants";
import { TaskCardContainer } from "./styled";

export default function TaskCard({ description }: TaskCardProps) {
  return (
    <TaskCardContainer>
      <span>{description}</span>
    </TaskCardContainer>
  );
}
