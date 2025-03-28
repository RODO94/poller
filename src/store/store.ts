import {
  profileOne,
  profileThree,
  profileTwo,
  staticChatData,
} from "@/data/mockChatData";
import { Chat, Emojis, Profile } from "@/types/chat";
import { create } from "zustand";
import { updateChatReaction } from "./utils";

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

export const useStore = create<State & Actions>((set, get) => ({
  chatHistory: staticChatData,
  users: [profileOne, profileTwo, profileThree],
  currentUser: { picture: "", id: "user" },

  addMessage: (newMessage) => {
    set((state) => ({ chatHistory: [...state.chatHistory, newMessage] }));
  },

  addEmoji: (emoji, chatId) => {
    const updatedChatHistory = updateChatReaction(
      get().chatHistory,
      chatId,
      emoji,
      "add"
    );
    set({ chatHistory: updatedChatHistory });
  },

  removeEmoji: (emoji, chatId) => {
    const updatedChatHistory = updateChatReaction(
        get().chatHistory,
        chatId,
        emoji,
        "remove"
      );
      set({ chatHistory: updatedChatHistory });
  },
}));
