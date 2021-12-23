export default class CustomNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Not Found";
  }
}
