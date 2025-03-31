import ChatCard from "@/components/ui/ChatCard";
import { useStore } from "@/store/store";
import { type Chat } from "@/types/chat";

export default function Chat() {
  /*
We need it to display the chat
It should handle the chat order
It should receive an array of messages
    */

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

  const messageIdList = useStore((state) => state.messageIdList);

  return (
    <section
      className={`px-12 py-2.5 inline-flex flex-col justify-center items-start gap-4`}
    >
      {messageIdList.map((id) => {
        return <ChatCard key={Math.random()} id={id} />;
      })}
    </section>
  );
}
