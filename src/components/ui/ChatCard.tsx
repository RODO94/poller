import { Chat } from "@/types/chat";
import Message from "./Message";

export default function ChatCard({ message, profile: { picture, id } }: Chat) {
  /**
   * Takes in a Message and adds a profile pic
   * Adds a variant for a user chat card
   */

  const userId = "user";
  const isUserMessage = id === userId;

  return (
    <>
      <p>{picture}</p>
      <Message message={message} isUserMessage={isUserMessage} />
    </>
  );
}
