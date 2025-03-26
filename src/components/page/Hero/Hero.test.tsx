import { cleanup, render, screen } from "@testing-library/react";
import Hero from "./hero";
describe("the UI", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should display a central message", () => {
    screen.debug();
    const title = screen.getByRole("heading", { name: "Lasagne is a pie" });
    expect(title).toBeInTheDocument();
  });
});
