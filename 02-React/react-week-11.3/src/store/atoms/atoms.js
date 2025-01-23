import { atom } from "recoil";

export const myNetworkAtom = atom({
  default: 102,
  key: "myNetwork",
});

export const jobsAtom = atom({
  default: 0,
  key: "jobs",
});

export const messagesAtom = atom({
  default: 12,
  key: "messages",
});

export const notificationAtom = atom({
  default: 0,
  key: "notification",
});
