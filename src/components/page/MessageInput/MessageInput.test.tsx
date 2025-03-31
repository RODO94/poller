import { cleanup, render, screen } from "@testing-library/react";
import MessageInput from "./MessageInput";
describe("the UI", () => {
  beforeEach(() => {
    render(<MessageInput />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should have a box for sending a message", () => {
    const messageBox = screen.getByRole("textbox", { name: "message-input" });
    expect(messageBox).toBeInTheDocument();
  });
});
