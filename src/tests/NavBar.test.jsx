import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { MemoryRouter } from "react-router";

test("render navbar links", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  expect(screen.getByText(/Cart/i)).toBeInTheDocument();
});
