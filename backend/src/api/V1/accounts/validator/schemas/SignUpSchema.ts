import Joi from "joi";
import JoiPassword from "joi-password";
import IAccountSignUpDTO from "../../entity/IAccountSignUpDTO";
const SignUpSchema: Joi.ObjectSchema = Joi.object<IAccountSignUpDTO>({
  name: Joi.string().max(50).min(3).trim().required(),
  lastName: Joi.string().max(50).min(3).trim().required(),
  email: Joi.string()
    .required()
    .max(50)
    .min(8)
    .trim()
    .email()
    .required()
    .messages({
      "string.empty": `"email" cannot be an empty field`,
    }),
  password: JoiPassword.string()
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
  confirmPassword: JoiPassword.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": `"confirmPassword" cannot be an empty field`,
      "*": "your confirmed password does not match",
    }),
});

export default SignUpSchema;
