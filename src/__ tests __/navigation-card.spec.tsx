import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationCard from "../components/navigation-card";

describe("NavigationCard", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Router>
        <NavigationCard name="Test Name" path="/test-path" />
      </Router>
    );

    expect(getByText("Test Name")).toBeInTheDocument();
  });
});
