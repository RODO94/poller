import {
  profileOne,
  profileThree,
  profileTwo,
  staticChatData,
} from "@/data/mockChatData";
import { Chat, Emojis, Profile } from "@/types/chat";
import { create } from "zustand";

type State = {
  chatHistory: Chat[];
  users: Profile[];
  currentUser: Profile;
};

type Actions = {
  addMessage: (newMessage: Chat) => void;
  addEmoji: (emoji: Emojis, chatId: Chat["id"]) => void;
  removeEmoji: (emoji: Emojis, chatId: Chat["id"]) => void;
};

export const useStore = create<State & Actions>((set) => ({
  chatHistory: staticChatData,
  users: [profileOne, profileTwo, profileThree],
  currentUser: { picture: "", id: "user" },

  addMessage: (newMessage) => {
    set((state) => ({ chatHistory: [...state.chatHistory, newMessage] }));
  },

  addEmoji: (emoji, chatId) => {
    console.log(emoji, chatId);
  },

  removeEmoji: (emoji, chatId) => {
    console.log(emoji, chatId);
  },
}));
