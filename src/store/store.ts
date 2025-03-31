import {
  messageIdList,
  profileOne,
  profileThree,
  profileTwo,
  staticMessageList,
} from "@/data/mockChatData";
import {
  ChatList,
  Emojis,
  MessageId,
  MessageList,
  Profile,
} from "@/types/chat";
import { create } from "zustand";
import { updateChatReaction } from "./utils";
import { immer } from "zustand/middleware/immer";

interface State {
  messageIdList: ChatList;
  messageList: MessageList;
  users: Profile[];
  currentUser: Profile;
  addMessage: (newMessageId: MessageId) => void;
  addEmoji: (emoji: Emojis, chatId: MessageId) => void;
  removeEmoji: (emoji: Emojis, chatId: MessageId) => void;
}

export const useStore = create<State>()(
  immer((set) => ({
    messageIdList: messageIdList,
    messageList: staticMessageList,
    users: [profileOne, profileTwo, profileThree],
    currentUser: { picture: "", id: "user" },

    addMessage: (newMessageId: MessageId) => {
      set((state) => ({
        messageIdList: [...state.messageIdList, newMessageId],
      }));
    },

    addEmoji: (emoji, messageId) => {
      set(({ messageList }: State) => {
        const targetMessage = messageList[messageId];
        const newReactions = updateChatReaction(
          targetMessage.message.reactions,
          emoji,
          "add"
        );

        messageList[messageId].message.reactions = newReactions;
      });
    },

    removeEmoji: (emoji, messageId) => {
      set(({ messageList }: State) => {
        const targetMessage = messageList[messageId];
        const newReactions = updateChatReaction(
          targetMessage.message.reactions,
          emoji,
          "remove"
        );

        messageList[messageId].message.reactions = newReactions;
      });
    },
  }))
);

export const useMessageIds = () => useStore((state) => state.messageIdList);

export const useMessage = (id: MessageId) =>
  useStore((state) => state.messageList[id]);

export const useCurrentUser = () => useStore((state) => state.currentUser);
