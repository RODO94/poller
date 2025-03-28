import { Emojis, ReactionSet } from "@/types/chat";
import ReactionTracker from "./ReactionTracker";
import Emoji from "./Emoji";

export default function ReactionBar({
  reactions: { userReactions, allReactions },
}: {
  reactions: ReactionSet;
}) {
  /**
   * A reaction bar should contain
   * the means to add a reaction
   * a reaction tracker
   */
  return (
    <>
      {Object.entries(userReactions).map(
        ([key, value]) => value && <Emoji emoji={key as Emojis} outlineIcon />
      )}
      <ReactionTracker reactions={allReactions} />
    </>
  );
}
