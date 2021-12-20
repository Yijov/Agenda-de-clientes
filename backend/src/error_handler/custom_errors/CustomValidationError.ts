export default class CustomValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Validation Error";
  }
}
