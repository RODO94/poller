import { cleanup, render, screen } from "@testing-library/react";
import MessageInput from "./MessageInput";
import userEvent from "@testing-library/user-event";
describe("the UI", () => {
  beforeEach(() => {
    render(<MessageInput />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should have a box for sending a message", () => {
    const messageBox = screen.queryByLabelText("Add a comment");
    expect(messageBox).toBeInTheDocument();
  });

  it("should display a button for sending a message", () => {
    const sendMessageButton = screen.queryByRole("button");
    expect(sendMessageButton).toBeInTheDocument();
  });

  it("should activate the send button when you start typing", async () => {
    const user = userEvent.setup();
    const messageBox = screen.getByLabelText("Add a comment");
    const sendMessageButton = screen.getByRole("button");

    expect(sendMessageButton).toBeDisabled();

    await user.type(messageBox, "initial message");

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
