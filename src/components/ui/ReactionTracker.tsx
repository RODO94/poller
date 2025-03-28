import { type ReactionTracker } from "@/types/chat";

export default function ReactionTracker({
  reactions: { fire, smile, heart },
}: {
  reactions: ReactionTracker;
}) {
  /**
   * A reaction tracker should take in a list
   * of reactions and display the relevant
   * emojis and a total of the number
   * of reactions a message has
   * received
   */
  const total = fire + heart + smile;
  return <>{total}</>;
}
