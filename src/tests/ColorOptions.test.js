// ColorOptions.test.js
import { render, screen } from "@testing-library/react";
import ColorOptions from "../components/ColorOptions/ColorOptions";

describe("The different color options renders as expected", () => {
  const mockOptions = ["ABD123", "3FA12A", "DAF378"];

  test("So that component exists in the document", () => {
    render(<ColorOptions options={mockOptions} />);

    const colorOptions = screen.getByTestId("color-options");

    expect(colorOptions).toBeInTheDocument();
  });

  test("That there are 3 options to click on", () => {
    render(<ColorOptions options={mockOptions} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toEqual(3);
  });
});
