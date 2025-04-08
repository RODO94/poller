import {
  messageIdList,
  profileOne,
  profileTwo,
  staticMessageList,
  userProfile,
} from "../data/mockChatData";
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
import { persist } from "zustand/middleware";

interface State {
  messageIdList: ChatList;
  messageList: MessageList;
  users: Profile[];
  currentUser: Profile;
  addMessage: (newMessageId: MessageId, newMessage: MessageList) => void;
  addEmoji: (emoji: Emojis, chatId: MessageId) => void;
  removeEmoji: (emoji: Emojis, chatId: MessageId) => void;
}

export const useStore = create<State>()(
  persist(
    immer((set) => ({
      messageIdList: messageIdList,
      messageList: staticMessageList,
      users: [profileOne, profileTwo, userProfile],
      currentUser: { picture: "", id: "99" },

      addMessage: (newMessageId: MessageId, newMessage: MessageList) => {
        set(({ messageIdList, messageList }: State) => {
          messageIdList.push(newMessageId);
          messageList[newMessageId] = newMessage[newMessageId];
        });
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
    })),
    {
      name: "chat-storage",
      partialize: (state) => ({
        messageList: state.messageList,
        messageIdList: state.messageIdList,
      }),
    }
  )
);

export const useMessageIds = () => useStore((state) => state.messageIdList);

export const useMessage = (id: MessageId) =>
  useStore((state) => state.messageList[id]);

export const useCurrentUser = () => useStore((state) => state.currentUser);
