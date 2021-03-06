import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, $Button } from "@button";

describe("auth button", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Button variant={$Button.AUTH} onClick={() => console.log("clicked")} />
    );
    expect(getByTestId("auth-button--atom")).toHaveTextContent(
      "Continue with Email"
    );
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button variant={$Button.AUTH} onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Continue with Email/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
