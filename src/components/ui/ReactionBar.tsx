import { Emojis, MessageId, ReactionSet } from "@/types/chat";
import ReactionTracker from "./ReactionTracker";
import Emoji from "./Emoji";

export default function ReactionBar({
  messageId,
  reactions: { userReactions, allReactions },
}: {
  messageId: MessageId;
  reactions: ReactionSet;
}) {
  /**
   * A reaction bar should contain
   * the means to add a reaction
   * a reaction tracker
   */
  return (
    <article className="flex flex-row items-center gap-2 justify-between pt-1 border-t-[0.50px] border-stone-300">
      <div className="flex flex-row gap-1">
        {Object.entries(userReactions).map(([key, value]) => (
          <Emoji
            key={Math.random()}
            emoji={key as Emojis}
            isActive={value}
            messageId={messageId}
            outlineIcon
          />
        ))}
      </div>
      <ReactionTracker reactions={allReactions} />
    </article>
  );
}
