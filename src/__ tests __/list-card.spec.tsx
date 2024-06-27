import { render, screen } from "@testing-library/react";
import { ListCardProps } from "../constants";
import ListCard from "../components/list-card";

describe("ListCard Component", () => {
  const defaultProps: ListCardProps = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
  };

  it("should render the name", () => {
    render(<ListCard {...defaultProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
