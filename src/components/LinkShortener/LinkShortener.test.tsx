import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkShortener from "./LinkShortener";

test("input should be empty", () => {
  render(<LinkShortener />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveDisplayValue("");
});

test("should not allow invalid link", async () => {
  render(<LinkShortener />);

  const input = screen.getByRole("textbox") as HTMLInputElement;

  userEvent.type(input, "abcd");

  expect(input.value).not.toMatch(/^[a-zA-Z]+\.[a-zA-Z]+$/);
});

test("should allow valid link", async () => {
  render(<LinkShortener />);

  const input = screen.getByRole("textbox") as HTMLInputElement;

  userEvent.type(input, "link.com");

  expect(input.value).toMatch(/^[a-zA-Z]+\.[a-zA-Z]+$/);
});

test("should show error message if link is invalid", async () => {
  render(<LinkShortener />);

  const input = screen.getByRole("textbox");

  userEvent.type(input, "abcd");

  await userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.getByTestId("error");

  expect(errorMsg).toHaveTextContent("please add a valid link");
});

test("should not show error message if link is valid", async () => {
  render(<LinkShortener />);

  const input = screen.getByRole("textbox");

  userEvent.type(input, "link.com");

  await userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.queryByTestId("error");

  expect(errorMsg).not.toBeInTheDocument();
});

test("should show error message if field is empty", async () => {
  render(<LinkShortener />);

  await userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.getByTestId("error");

  expect(errorMsg).toHaveTextContent("please add a link");
});

test("should not show error message if field isn't empty", async () => {
  render(<LinkShortener />);
  const input = screen.getByRole("textbox");
  const errorMsg = screen.queryByTestId("error");

  await userEvent.type(input, "link.com");

  userEvent.click(screen.getByRole("button"));

  expect(errorMsg).not.toBeInTheDocument();
});
