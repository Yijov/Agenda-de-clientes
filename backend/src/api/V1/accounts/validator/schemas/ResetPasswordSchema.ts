import Joi from "joi";
import JoiPassword from "joi-password";
import { IPasswordResetDTO } from "../../entity";
const ResetPasswordSchema: Joi.ObjectSchema = Joi.object<IPasswordResetDTO>({
  currentPassword: JoiPassword.string()
    .min(1)
    .max(25)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.empty": `"currentPassword" cannot be an empty field`,
    }),
  newPassword: JoiPassword.string()
    .min(8)
    .max(25)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(),

  newPasswordConfirm: JoiPassword.string()
    .required()
    .valid(Joi.ref("newPassword"))
    .required(),
});

export default ResetPasswordSchema;
