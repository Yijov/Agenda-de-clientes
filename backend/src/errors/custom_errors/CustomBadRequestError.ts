export default class CustomBadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Bad request";
  }
}
