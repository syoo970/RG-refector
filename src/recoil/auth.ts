import { atom } from "recoil";

export const authState = atom<boolean>({
  key: "authState",
  default: false,
});
