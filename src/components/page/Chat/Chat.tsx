import { type Chat } from "@/types/chat";

export default function Chat() {
  /*
We need it to display the chat
It should handle the chat order
It should receive an array of messages
    */

  const staticChatData: Chat[] = [
    {
      message: {
        text: "",
        date: "",
        userReactions: [],
        otherReactions: [],
      },
      profile: {
        picture: "",
        id: "",
      },
    },
  ];

  /**
   * Structure of a Message:
   * - ChatCard
   * -- Message
   * --- ReactionBar
   * ---- Emoji
   * --- ReactionTracker
   * ---- Emoji
   *
   */
  return;
}
