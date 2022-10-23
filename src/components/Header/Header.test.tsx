import Header from "./Header";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import GetStarted from "../../GetStarted";

test("button should have text get started", () => {
  render(<Header />, { wrapper: MemoryRouter });
  const btnText = screen.getByText(/Get Started/i);
  expect(btnText).toBeInTheDocument();
});

test("should navigate to get started page", async () => {
  render(
    <MemoryRouter initialEntries={["/getstarted"]}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </MemoryRouter>
  );

  //button
  userEvent.click(screen.getByText(/Get Started/i));

  await waitFor(() => {
    expect(screen.getByText(/Get Started page/i)).toBeInTheDocument();
  });
});
