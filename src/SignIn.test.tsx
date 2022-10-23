import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignIn from "./SignIn";

test("Inputs should be empty", () => {
  render(<SignIn />);
  //username [0], password [1]
  const inputs = screen.getAllByRole("textbox");

  expect(inputs[0]).toHaveDisplayValue("");
  expect(inputs[1]).toHaveDisplayValue("");
});

test("should show error message if username is empty", async () => {
  render(<SignIn />);
  //username [0], password [1]
  const inputs = screen.getAllByRole("textbox");

  await userEvent.type(inputs[1], "password");

  userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.getByTestId("error");

  expect(errorMsg).toHaveTextContent("please enter a username");
});

test("should show error message if password is empty", async () => {
  render(<SignIn />);
  //username [0], password [1]
  const inputs = screen.getAllByRole("textbox");

  await userEvent.type(inputs[0], "user");

  userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.getByTestId("error");

  expect(errorMsg).toHaveTextContent("please enter a password");
});

test("should show error message if username and password is empty", async () => {
  render(<SignIn />);

  userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.getByTestId("error");

  expect(errorMsg).toHaveTextContent("please enter a username and a password");
});

test("should not show error message if fields are filled", async () => {
  render(<SignIn />);
  //username [0], password [1]
  const inputs = screen.getAllByRole("textbox");

  await userEvent.type(inputs[0], "user");
  await userEvent.type(inputs[1], "password");

  userEvent.click(screen.getByRole("button"));

  const errorMsg = screen.queryByTestId("error");

  expect(errorMsg).not.toBeInTheDocument();
});
