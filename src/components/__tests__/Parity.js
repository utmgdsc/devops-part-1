import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Counter, Parity } from "../index.js";

afterEach(cleanup); // unmounts all the components created in a test once it is finished running

test("displays correct text and background color for odd numbers", () => {
  const { rerender } = render(<Parity count={1} />);

  const parityComponent = screen.getByTestId("parity-div");
  [1, 3, 5, 7].forEach((num) => {
    rerender(<Parity count={num} />);
    expect(parityComponent).toHaveTextContent("This number is odd");
    expect(parityComponent).toHaveStyle("background-color: red");
  });
});

test("displays correct text and background color for even numbers", () => {
  const { rerender } = render(<Parity count={1} />);

  const parityComponent = screen.getByTestId("parity-div");
  [2, 4, 6, 8].forEach((num) => {
    rerender(<Parity count={num} />);
    expect(parityComponent).toHaveTextContent("This number is even");
    expect(parityComponent).toHaveStyle("background-color: green");
  });
});
