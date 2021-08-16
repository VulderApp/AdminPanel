const tokenKeyName = "SESSION_TOKEN";

export default {
  setToken(token: string): void {
    localStorage.setItem(tokenKeyName, token);
  },
  isExists(): boolean {
    return !localStorage.getItem(tokenKeyName);
  },
  removeToken(): void {
    localStorage.removeItem(tokenKeyName);
  },
};
