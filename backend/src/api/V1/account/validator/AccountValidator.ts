import { ObjectSchema } from "joi";
import SigninSchema from "./schemas/SignInSchema";
import SignUpSchema from "./schemas/SignUpSchema";
import ResetPasswordSchema from "./schemas/ResetPasswordSchema";
import AccountUpdateSchema from "./schemas/AccountUpdateSchema";
import IAuthSignInDTO from "../entity/IAccountSignInDTO";
import IAuthSignUpDTO from "../entity/IAccountSignUpDTO";
import IPasswordResetDTO from "../entity/PasswordResetDTO";
import IAccountUpdateDTO from "../entity/IAccountUpdateDTO";
import CustomValidationError from "../../../../error_handler/custom_errors/CustomValidationError";

class AccountValidator {
  public ValidateSignUpData = async (DTO: IAuthSignUpDTO) => {
    await this.Validate(SignUpSchema, DTO);
  };

  public ValidateSignInData = async (DTO: IAuthSignInDTO) => {
    await this.Validate(SigninSchema, DTO);
  };

  public ValidatePasswordResetData = async (DTO: IPasswordResetDTO) => {
    await this.Validate(ResetPasswordSchema, DTO);
  };
  public AccountUpdateData = async (DTO: IAccountUpdateDTO) => {
    await this.Validate(AccountUpdateSchema, DTO);
  };

  private Validate = async (schema: ObjectSchema, DTO: {}) => {
    const validation = await schema.validate(DTO);
    if (validation.error?.message) {
      throw new CustomValidationError(validation.error?.message);
    }
  };
}

export default AccountValidator;
