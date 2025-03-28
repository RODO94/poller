import ChatCard from "@/components/ui/ChatCard";
import { staticChatData } from "@/data/mockChatData";
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
  return (
    <>
      {staticChatData.map(({ message, profile }) => {
        return (
          <ChatCard key={Math.random()} message={message} profile={profile} />
        );
      })}
    </>
  );
}
