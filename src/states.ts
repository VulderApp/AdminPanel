import { atom } from "recoil";
import { createBrowserHistory } from "history";

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const routeHistory = atom({
  key: "history",
  default: createBrowserHistory(),
});
