import { atom } from "recoil";

export const appbarTitle = atom({
  key: "appbarTitle",
  default: "Vulder Admin Panel",
});

export const token = atom<string | null>({
  key: "token",
  default: null,
});
