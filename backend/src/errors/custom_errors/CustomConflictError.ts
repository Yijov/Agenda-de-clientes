export default class CustomConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "conflict";
  }
}
