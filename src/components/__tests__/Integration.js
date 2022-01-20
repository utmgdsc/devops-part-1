import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Counter, Parity } from "../index.js";

afterEach(cleanup); // unmounts all the components created in a test once it is finished running

test("increase button click affects Parity component correctly ", () => {
  render(<Counter count={1} />); // Parity component is implicitly rendered since it's a child of Counter

  const parityComponent = screen.getByTestId("parity-div");

  const increaseButton = screen.getByTestId("increase-button");

  expect(parityComponent).toHaveTextContent("This number is even");
  expect(parityComponent).toHaveStyle("background-color: green");

  fireEvent.click(increaseButton);

  expect(parityComponent).toHaveTextContent("This number is odd");
  expect(parityComponent).toHaveStyle("background-color: red");

  fireEvent.click(increaseButton);

  expect(parityComponent).toHaveTextContent("This number is even");
  expect(parityComponent).toHaveStyle("background-color: green");
});
