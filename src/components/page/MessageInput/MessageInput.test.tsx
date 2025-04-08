import { cleanup, render, screen } from "@testing-library/react";
import MessageInput from "./MessageInput";
import userEvent from "@testing-library/user-event";
import { useStore } from "../../../store/store";

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

describe("the functionality", () => {
  beforeEach(() => {
    render(<MessageInput />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should clear the message box when the send button is clicked", async () => {
    const user = userEvent.setup();
    const messageBox = screen.getByLabelText("Add a comment");
    const sendMessageButton = screen.getByRole("button");

    await user.type(messageBox, "initial message");

    expect(messageBox).toHaveValue("initial message");

    await user.click(sendMessageButton);
    expect(messageBox).toHaveValue("");
  });

  it("should call the addMessage function when the send button is clicked", async () => {
    const addMessageSpy = vi.spyOn(useStore.getState(), "addMessage");
    const user = userEvent.setup();
    const messageBox = screen.getByLabelText("Add a comment");
    const sendMessageButton = screen.getByRole("button");

    await user.type(messageBox, "initial message");

    expect(messageBox).toHaveValue("initial message");

    await user.click(sendMessageButton);
    expect(addMessageSpy).toHaveBeenCalledTimes(1);
  });
});
