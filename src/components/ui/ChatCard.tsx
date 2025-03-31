import { MessageId } from "@/types/chat";
import Message from "./Message";
import { useMessage } from "@/store/store";

export default function ChatCard({ id }: { id: MessageId }) {
  /**
   * Takes in a Message and adds a profile pic
   * Adds a variant for a user chat card
   */

  const { message, profile } = useMessage(id);

  const userId = "99";
  const isUserMessage = profile.id === userId;

  const messagePadding = isUserMessage ? "pl-8" : "pr-8";
  const pictureOrder = isUserMessage ? "order-3" : "order-1";

  return (
    <article className={`flex flex-row gap-1 ${messagePadding}`}>
      <div
        className={`w-4 h-4 rounded-[50%] bg-blue-700 ${pictureOrder}`}
      ></div>
      <Message messageId={id} message={message} isUserMessage={isUserMessage} />
    </article>
  );
}
