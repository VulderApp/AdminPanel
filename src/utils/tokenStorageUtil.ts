const tokenKeyName = "SESSION_TOKEN";

export default {
  setToken(token: string): void {
    localStorage.setItem(tokenKeyName, token)
  },
  isExists(): boolean {
    const token = localStorage.getItem(tokenKeyName)
    return !token
  },
}
