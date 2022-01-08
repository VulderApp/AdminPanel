import { atom } from "recoil";

export const appbarTitle = atom({
  key: "appbarTitle",
  default: "Vulder Admin Panel",
});

export const jwtToken = atom<string | null>({
  key: "jwtToken",
  default: null,
});
