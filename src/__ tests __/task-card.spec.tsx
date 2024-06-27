import { render, screen } from "@testing-library/react";
import { TaskCardProps } from "../constants";
import TaskCard from "../components/task-card";

describe("TaskCard Component", () => {
  const defaultProps: TaskCardProps = {
    description: "Test Task Description",
  };

  it("should render the task card with the correct description", () => {
    render(<TaskCard {...defaultProps} />);
    expect(screen.getByText("Test Task Description")).toBeInTheDocument();
  });
});
