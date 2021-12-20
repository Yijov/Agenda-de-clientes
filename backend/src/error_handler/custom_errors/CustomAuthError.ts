export default class CustomAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Auth Error";
  }
}
