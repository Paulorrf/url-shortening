import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkShortener from "./LinkShortener";

test("input should be empty", () => {
  render(<LinkShortener />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveDisplayValue("");
});

test("should show error message if link is invalid", async () => {
  render(<LinkShortener />);
  const input = screen.getByRole("textbox");
  const errorMsg = screen.queryByTestId("error");

  await userEvent.type(input, "link.com.br");

  userEvent.click(screen.getByRole("button"));

  //should always have letters dot and letters
  //example: google.com
  expect(screen.getByRole("textbox")).toEqual(
    expect.stringMatching(/^[a-zA-Z]\.[a-zA-Z]$/)
  );
  expect(errorMsg).toHaveTextContent("please add a valid link");
});

test("should not show error message if link is valid", async () => {
  render(<LinkShortener />);
  const input = screen.getByRole("textbox");
  const errorMsg = screen.queryByTestId("error");

  await userEvent.type(input, "link.com");

  userEvent.click(screen.getByRole("button"));

  //should always have letters dot and letters
  //example: google.com
  expect(screen.getByRole("textbox")).toEqual(
    expect.stringMatching(/^[a-zA-Z]\.[a-zA-Z]$/)
  );
  expect(errorMsg).not.toBeInTheDocument();
});

test("should show error message if field is empty", () => {
  render(<LinkShortener />);
  const errorMsg = screen.queryByTestId("error");

  userEvent.click(screen.getByRole("button"));

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
