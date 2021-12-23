import Joi from "joi";
import JoiPassword from "joi-password";
import IAuthSigninDTO from "../../entity/IAccountSignInDTO";
const SigninSchema: Joi.ObjectSchema<IAuthSigninDTO> = Joi.object({
  email: Joi.string().required(),
  password: JoiPassword.string().required(),
});

export default SigninSchema;
