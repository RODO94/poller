type Reaction = {
  emoji: string;
};

type Profile = {
  picture: string;
  id: string;
};

type BaseMessage = {
  text: string;
  date: string;
};

interface Message extends BaseMessage {
  userReactions: Reaction[];
  otherReactions: Reaction[];
}

export interface Chat {
  message: Message;
  profile: Profile;
}
