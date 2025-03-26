import Hero from "./Hero";
import { cleanup, render, screen } from "@testing-library/react";
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
