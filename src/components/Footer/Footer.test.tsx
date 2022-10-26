import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("should have 4 lists", () => {
  render(<Footer />);
  const lists = screen.getAllByRole("list");

  expect(lists.length).toBe(4);
});
