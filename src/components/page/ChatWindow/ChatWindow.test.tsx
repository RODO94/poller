import { render, screen, within } from "@testing-library/react";
import Chat from "./ChatWindow";
import userEvent from "@testing-library/user-event";
import { useStore } from "../../../store/store";
import { messageIdList, staticMessageList } from "../../../data/mockChatData";

describe("The UI of the chat", () => {
  vi.spyOn(useStore, "setState").mockImplementation(() => {
    return {
      messageIdList: messageIdList,
      messageList: staticMessageList,
      addEmoji: vi.fn(),
      removeEmoji: vi.fn(),
      addMessage: vi.fn(),
      users: [],
      currentUser: { picture: "", id: "user" },
    };
  });
  beforeEach(() => {
    render(<Chat />);
  });

  it("displays a list of messages", () => {
    const messageList = screen.getAllByTestId(/^message-/);
    expect(messageList.length).toEqual(3);
  });

  it("shows a list of reactions for each message", async () => {
    const firstMessage = screen.getByTestId(/message-1/);
    expect(firstMessage).toBeInTheDocument();

    const reactionBar = within(firstMessage).queryByTestId(/^reaction-tracker/);
    expect(reactionBar).toBeInTheDocument();

    if (!reactionBar) return;

    const reactions = await within(reactionBar).findAllByTestId(/^reaction-/);

    const fireReaction = within(firstMessage).getByTestId(/^reaction-fire/);
    const heartReaction = within(firstMessage).getByTestId(/^reaction-heart/);

    expect(reactions).toContain(fireReaction);
    expect(reactions).toContain(heartReaction);
  });

  it("can differentiate a user reaction", async () => {
    const firstMessage = screen.getByTestId("message-1");

    expect(within(firstMessage).getByTestId("1-fire-icon")).toHaveAttribute(
      "stroke",
      "grey"
    );

    expect(within(firstMessage).getByTestId("1-smile-icon")).toHaveAttribute(
      "stroke",
      "yellow"
    );
  });

  it("has a profile pic next to the message", () => {
    const firstMessage = screen.getByTestId("message-1");
    expect(firstMessage).toContainElement(screen.getByTestId("profile-pic-1"));
  });
});

describe("the interactions with the chat", () => {
  beforeEach(() => {
    render(<Chat />);
  });
  it("can add a user reaction", async () => {
    const user = userEvent.setup();
    const firstMessage = screen.getByTestId("message-1");
    const fireIcon = within(firstMessage).getByTestId("1-fire-icon");

    expect(fireIcon).toHaveAttribute("stroke", "grey");

    await user.click(fireIcon);

    expect(within(firstMessage).getByTestId("1-fire-icon")).toHaveAttribute(
      "stroke",
      "yellow"
    );
  });

  it.todo("can remove a user reaction", async () => {
    const user = userEvent.setup();
    const firstMessage = screen.getByTestId("message-1");
    const smileIcon = within(firstMessage).getByTestId("1-smile-icon");

    expect(smileIcon).toHaveAttribute("stroke", "yellow");

    await user.click(smileIcon);

    expect(within(firstMessage).getByTestId("1-smile-icon")).toHaveAttribute(
      "stroke",
      "grey"
    );
  });
});
