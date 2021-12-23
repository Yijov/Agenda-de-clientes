import Joi from "joi";
import customerTypes from "../../enums/customerTipes";
import customerCategories from "../../enums/customerCategories";

import { ICustomer } from "../../entity";
const CustomerCreateSchema: Joi.ObjectSchema = Joi.object<ICustomer>({
  name: Joi.string().max(50).min(3).trim().required(),
  __type: Joi.string().valid(customerTypes).required(),
  userAccountId: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
  category: Joi.string().valid(customerCategories),
});

export default CustomerCreateSchema;
