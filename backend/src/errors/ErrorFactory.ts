import CustomAuthError from "./custom_errors/CustomAuthError";
import CustomBadRequestError from "./custom_errors/CustomBadRequestError";
import CustomNotFoundError from "./custom_errors/CustomNotFoundError";
import CustomValidationError from "./custom_errors/CustomValidationError";

export default class ErrorFactory {
  public BadRequest = (message: string): void => {
    throw new CustomBadRequestError(message);
  };
  public ValidationError = (message: string): void => {
    throw new CustomValidationError(message);
  };
  public Unauthorized = (message: string): void => {
    throw new CustomAuthError(message);
  };
  public NotFound = (message: string) => {
    throw new CustomNotFoundError(message);
  };
}
