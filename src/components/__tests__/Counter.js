import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Counter, Parity } from "../index.js";

afterEach(cleanup); // unmounts all the components created in a test once it is finished running

test("renders increase button to screen", () => {
  render(<Counter />);
  const component = screen.getByTestId("increase-button");
  expect(component).toBeInTheDocument();
});

test("increase button is labelled correctly ", () => {
  render(<Counter />);
  const component = screen.getByTestId("increase-button");
  expect(component).toHaveTextContent("+");
});

test("count label starts off at 0 on mount", () => {
  render(<Counter />);
  const counterLabel = screen.getByTestId("count");
  expect(counterLabel).toHaveTextContent("0");
});

test("increase button increases the number displayed in the count label by 1 ", () => {
  render(<Counter />);
  const counterLabel = screen.getByTestId("count");
  const increaseButton = screen.getByTestId("increase-button");

  expect(counterLabel).toHaveTextContent("0");
  for (let i = 0; i < 10; i++) {
    fireEvent.click(increaseButton);
    expect(counterLabel).toHaveTextContent((i + 1).toString());
  }
});
