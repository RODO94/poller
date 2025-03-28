export type Emojis = "fire" | "smile" | "heart";

export type ReactionTracker = Record<Emojis, number>;
export type UserReactions = Record<Emojis, boolean>;

export type Profile = {
  picture: string;
  id: string;
};

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

export interface Chat {
  id: string;
  message: Message;
  profile: Profile;
}
