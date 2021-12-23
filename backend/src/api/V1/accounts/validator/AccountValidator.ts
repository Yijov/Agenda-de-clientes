import { ObjectSchema } from "joi";
import SigninSchema from "./schemas/SignInSchema";
import SignUpSchema from "./schemas/SignUpSchema";
import ResetPasswordSchema from "./schemas/ResetPasswordSchema";
import AccountUpdateSchema from "./schemas/AccountUpdateSchema";
import { Invalid } from "../../../../errors/custom_errors";
import {
  IAccountSignInDTO,
  IAccountSignUpDTO,
  IPasswordResetDTO,
  IAccountUpdateDTO,
} from "../entity";

class AccountValidator {
  public ValidateSignUpData = async (DTO: IAccountSignUpDTO) => {
    await this.Validate(SignUpSchema, DTO);
  };

  public ValidateSignInData = async (DTO: IAccountSignInDTO) => {
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
      throw new Invalid(validation.error?.message);
    }
  };
}

export default AccountValidator;
