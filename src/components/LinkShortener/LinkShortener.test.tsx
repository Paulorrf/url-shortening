import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("input should be empty", () => {
  const input = screen.getByRole("textbox");
  expect(input).toHaveDisplayValue("");
});

test("should show error message if link is invalid", async () => {
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
  const input = screen.getByRole("textbox");
  const errorMsg = screen.queryByTestId("error");

  userEvent.click(screen.getByRole("button"));

  expect(errorMsg).toHaveTextContent("please add a link");
});

test("should not show error message if field isn't empty", async () => {
  const input = screen.getByRole("textbox");
  const errorMsg = screen.queryByTestId("error");

  await userEvent.type(input, "link.com");

  userEvent.click(screen.getByRole("button"));

  expect(errorMsg).not.toBeInTheDocument();
});
