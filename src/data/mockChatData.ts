import { MessageList, Profile } from "@/types/chat";

export const profileOne: Profile = {
  picture: "",
  id: "1",
};
export const profileTwo: Profile = {
  picture: "",
  id: "2",
};
export const profileThree: Profile = {
  picture: "",
  id: "3",
};

export const userProfile: Profile = {
  picture: "",
  id: "99",
};
const dateNow = new Date(Date.now()).toLocaleString();

export const messageIdList = ["1", "2", "3"];

export const staticMessageList: MessageList = {
  "1": {
    message: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: dateNow,
      reactions: {
        allReactions: { fire: 1, smile: 0, heart: 1 },
        userReactions: { fire: false, smile: false, heart: false },
      },
    },
    profile: profileOne,
  },
  "2": {
    message: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date: dateNow,
      reactions: {
        allReactions: { fire: 4, smile: 1, heart: 5 },
        userReactions: { fire: false, smile: false, heart: false },
      },
    },
    profile: profileTwo,
  },
  "3": {
    message: {
      text: "The last mocked message comes from the profile of value three",
      date: dateNow,
      reactions: {
        allReactions: { fire: 0, smile: 1, heart: 1 },
        userReactions: { fire: false, smile: false, heart: false },
      },
    },
    profile: userProfile,
  },
};
