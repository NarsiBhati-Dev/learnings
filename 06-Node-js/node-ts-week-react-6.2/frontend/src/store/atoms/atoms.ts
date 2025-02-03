import { atom } from "recoil";

export const isUsernameAtom = atom({
  default: true,
  key: "isUsername",
});

export const isPasswordAtom = atom({
  default: true,
  key: "isPassword",
});
