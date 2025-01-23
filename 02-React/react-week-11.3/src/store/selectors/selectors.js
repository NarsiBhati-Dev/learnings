import { selector } from "recoil";
import {
  jobsAtom,
  messagesAtom,
  myNetworkAtom,
  notificationAtom,
} from "../atoms/atoms";

export const totalNotificationsSelector = selector({
  key: "sumNotifications",
  get: ({ get }) => {
    const sum =
      get(notificationAtom) +
      get(myNetworkAtom) +
      get(messagesAtom) +
      get(jobsAtom);

    return sum;
  },
});
