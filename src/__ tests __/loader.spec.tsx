import { render, screen } from "@testing-library/react";
import Loader from "../components/loader";

describe("Loader component", () => {
  it("renders loading text and styled components", () => {
    render(<Loader />);

    const loadingText = screen.getByText("Loading..");
    expect(loadingText).toBeInTheDocument;

    const loaderContainer = screen.getByTestId("loader-container");
    expect(loaderContainer).toBeInTheDocument;
  });
});
