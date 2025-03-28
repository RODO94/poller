import { Chat, Profile } from "@/types/chat";

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

const dateNow = new Date(Date.now()).toLocaleString();

export const staticChatData: Chat[] = [
  {
    id: "1",
    message: {
      text: "This is a new message from profile one",
      date: dateNow,
      reactions: {
        allReactions: { fire: 1, smile: 0, heart: 0 },
        userReactions: { fire: true, smile: false, heart: true },
      },
    },
    profile: profileOne,
  },
  {
    id: "2",
    message: {
      text: "Another message but this time it is from profile two",
      date: dateNow,
      reactions: {
        allReactions: { fire: 4, smile: 1, heart: 5 },
        userReactions: { fire: true, smile: true, heart: false },
      },
    },
    profile: profileTwo,
  },
  {
    id: "3",
    message: {
      text: "The last mocked message comes from the profile of value three",
      date: dateNow,
      reactions: {
        allReactions: { fire: 0, smile: 1, heart: 1 },
        userReactions: { fire: false, smile: true, heart: true },
      },
    },
    profile: profileThree,
  },
];
