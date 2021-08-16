const tokenKeyName = "SESSION_TOKEN";

export default {
  setToken(token: string): void {
    localStorage.setItem(tokenKeyName, token);
  },
  isNotExists(): boolean {
    return localStorage.getItem(tokenKeyName) == null;
  },
  removeToken(): void {
    localStorage.removeItem(tokenKeyName);
  },
};
