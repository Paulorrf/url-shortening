import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

test("should show hamb menu icon", () => {
  render(<Navbar />, { wrapper: MemoryRouter });

  expect(screen.getByTestId("open-menu")).toBeInTheDocument();
});

test("should show close icon after click", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
  const hambButton = screen.getByTestId("hamb-btn");

  userEvent.click(hambButton);

  expect(screen.getByTestId("close-menu")).toBeInTheDocument();
});

test("hamb list is invisible to user", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
  const listItems = screen.getByTestId("hamb-list");
  expect(listItems).toHaveClass("hidden");
});

test("hamb list is visible to user", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
  const hambButton = screen.getByTestId("hamb-btn");
  const listItems = screen.getByTestId("hamb-list");

  userEvent.click(hambButton);
  expect(listItems).toHaveClass("flex");
});

test("list should have 4 items", () => {
  render(<Navbar />, { wrapper: MemoryRouter });
  const listItems = screen.getAllByRole("listitem");

  expect(listItems.length).toBe(4);
});
