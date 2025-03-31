import { MessageId, type Message } from "@/types/chat";
import ReactionBar from "./ReactionBar";

type MessageProps = {
  message: Message;
  isUserMessage: boolean;
  messageId: MessageId;
};

export default function Message({
  messageId,
  message: { text, reactions },
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

  const messageBg = isUserMessage ? "bg-zinc-900" : "bg-zinc-800";
  const messageRounding = isUserMessage
    ? "rounded-tl-lg rounded-bl-lg rounded-br-lg"
    : "rounded-tr-lg rounded-bl-lg rounded-br-lg";
  return (
    <article
      className={`w-full flex flex-col px-2 pt-2 pb-1 mt-2 ${messageRounding} ${messageBg} order-2 gap-1`}
    >
      <p className="justify-start text-white text-[10px] font-normal leading-3 tracking-tight">
        {text}
      </p>
      {/* <p>{date}</p> */}
      <ReactionBar messageId={messageId} reactions={reactions} />
    </article>
  );
}
