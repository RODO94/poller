import {
  EmojiActions,
  Emojis,
  ReactionSet,
  ReactionTracker,
  UserReactions,
} from "@/types/chat";

export const updateChatReaction = (
  reactions: ReactionSet,
  emoji: Emojis,
  action: EmojiActions
): ReactionSet => {
  const newUserReactions = updateUserEmojiReaction(
    action,
    emoji,
    reactions.userReactions
  );

  const newReactionTracker = updateReactionTracker(
    action,
    emoji,
    reactions.allReactions
  );

  return { userReactions: newUserReactions, allReactions: newReactionTracker };
};

const updateUserEmojiReaction = (
  action: EmojiActions,
  emoji: Emojis,
  userReactions: UserReactions
): UserReactions => {
  const setEmojiTo = action === "add" ? true : false;
  const newUserReactions = { ...userReactions, [emoji]: setEmojiTo };
  return newUserReactions;
};

const updateReactionTracker = (
  action: "add" | "remove",
  emoji: Emojis,
  allReactions: ReactionTracker
): ReactionTracker => {
  const targetEmoji = allReactions[emoji];
  const newReactionTracker = {
    ...allReactions,
    [emoji]: action === "add" ? targetEmoji + 1 : targetEmoji - 1,
  };
  return newReactionTracker;
};
