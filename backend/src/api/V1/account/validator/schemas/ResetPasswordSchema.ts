import Joi from "joi";
import JoiPassword from "joi-password";
import IPasswordResetDTO from "../../entity/PasswordResetDTO";
const ResetPasswordSchema: Joi.ObjectSchema = Joi.object<IPasswordResetDTO>({
  currentPassword: JoiPassword.string()
    .min(1)
    .max(25)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.empty": `"email" cannot be an empty field`,
    }),
  newPassword: JoiPassword.string()
    .min(8)
    .max(25)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.min": "password must be at least {#limit} characters long",
      "password.noWhiteSpaces": "password must not contain whitespaces",
      "string.empty": `"password" cannot be an empty field`,
      "*": "password must contain at least 1 uppercase letter 1 lowercase letter 1 special character and 1 number",
    }),
  newPasswordConfirm: JoiPassword.string()
    .required()
    .valid(Joi.ref("newPassword"))
    .messages({
      "string.empty": `"confirmPassword" cannot be an empty field`,
      "*": "your confirmed password does not match",
    }),
});

export default ResetPasswordSchema;
