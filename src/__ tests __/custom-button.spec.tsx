import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "../components/custom-button";
import Themes from "../theme/theme";
import { ButtonProps } from "../constants";

afterEach(cleanup);
describe("Button component", () => {
  it("renders primary button with correct color and text", () => {
    const buttonProps: ButtonProps = {
      description: "Click me",
      color: "primary",
      onClick: () => {},
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const bg = `background-color: ${Themes.light.primary};`;
    expect(button).toHaveStyle(bg);
    expect(button.textContent).toBe("Click me");
  });

  it("renders secondary button with correct color and text", () => {
    const buttonProps: ButtonProps = {
      description: "Cancel",
      color: "secondary",
      onClick: () => {},
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const bg = `background-color: ${Themes.light.secondary};`;
    expect(button).toHaveStyle(bg);
    expect(button.textContent).toBe("Cancel");
  });

  it("renders button with icon and description", () => {
    const buttonProps: ButtonProps = {
      description: "Search",
      onClick: () => {},
      color: "warning",
      icon: <svg />,
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button.textContent).toBe("Search");
  });
});
