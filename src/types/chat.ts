export type Emojis = "fire" | "smile" | "heart";

export type ReactionTracker = Record<Emojis, number>;
export type UserReactions = Record<Emojis, boolean>;

export type EmojiActions = "add" | "remove";

export type Profile = {
  picture: string;
  id: string;
};

export type MessageId = string;

type BaseMessage = {
  text: string;
  date: string;
};

export type ReactionSet = {
  userReactions: UserReactions;
  allReactions: ReactionTracker;
};

export interface Message extends BaseMessage {
  reactions: ReactionSet;
}

export type MessageList = Record<MessageId, Chat>;
export type ChatList = MessageId[];

export interface Chat {
  message: Message;
  profile: Profile;
}
