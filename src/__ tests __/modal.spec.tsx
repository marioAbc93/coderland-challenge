import { render, screen, fireEvent } from "@testing-library/react";
import { useNotification } from "../models/context/useNotification";
import { useModal } from "../models/context/useModal";
import Modal from "../components/modal";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../models/context/useNotification", () => ({
  useNotification: jest.fn(),
}));

jest.mock("../models/context/useModal", () => ({
  useModal: jest.fn(),
}));

describe("Modal Component", () => {
  const mockSetOpen = jest.fn();
  const mockGetError = jest.fn();
  const mockGetSuccess = jest.fn();

  beforeEach(() => {
    (useModal as jest.Mock).mockReturnValue({
      open: true,
      setOpen: mockSetOpen,
    });
    (useNotification as jest.Mock).mockReturnValue({
      getError: mockGetError,
      getSuccess: mockGetSuccess,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the modal when open is true", () => {
    render(<Modal />);
    expect(
      screen.getByPlaceholderText("Type your new task...")
    ).toBeInTheDocument();
  });

  it("should close the modal when exit icon is clicked", () => {
    render(<Modal />);
    fireEvent.click(screen.getByTestId("exit-icon"));
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
