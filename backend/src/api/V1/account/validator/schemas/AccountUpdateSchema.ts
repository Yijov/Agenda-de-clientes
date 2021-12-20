import Joi from "joi";

import IAccountUpdateDTO from "../../entity/IAccountUpdateDTO";
const AccountUpdateSchema: Joi.ObjectSchema = Joi.object<IAccountUpdateDTO>({
  name: Joi.string().max(50).min(3).trim().required(),
  lastName: Joi.string().max(50).min(3).trim().required(),
});

export default AccountUpdateSchema;
