import { type Message } from "@/types/chat";
import ReactionBar from "./ReactionBar";

type MessageProps = {
  message: Message;
  isUserMessage: boolean;
};

export default function Message({
  message: { text, date, reactions },
  isUserMessage,
}: MessageProps) {
  /**
   * A Message should take in:
   * Text
   * Profile
   * Date
   * Reactions by others
   * Reactions by the user
   */
  return (
    <>
      <p>{text}</p>
      <p>{date}</p>
      <p>{isUserMessage}</p>
      <ReactionBar reactions={reactions} />
    </>
  );
}
