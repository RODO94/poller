import {
  Chat,
  EmojiActions,
  Emojis,
  ReactionTracker,
  UserReactions,
} from "@/types/chat";

export const updateChatReaction = (
  chatHistory: Chat[],
  targetId: Chat["id"],
  emoji: Emojis,
  action: EmojiActions
): Chat[] => {
  const updatedChatHistory = chatHistory.map((chat: Chat) => {
    if (chat.id !== targetId) return chat;

    const newUserReactions = updateUserEmojiReaction(
      action,
      emoji,
      chat.message.reactions.userReactions
    );

    const newReactionTracker = updateReactionTracker(
      action,
      emoji,
      chat.message.reactions.allReactions
    );
    const newChat: Chat = {
      ...chat,
      message: {
        ...chat.message,
        reactions: {
          userReactions: newUserReactions,
          allReactions: newReactionTracker,
        },
      },
    };

    return newChat;
  });
  return updatedChatHistory;
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
