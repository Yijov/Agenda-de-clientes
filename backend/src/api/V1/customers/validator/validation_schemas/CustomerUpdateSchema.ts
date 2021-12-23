import Joi from "joi";
import IUpdateCustomerDTO from "../../entity/IUpdateCustomerDTO";

const CustomerUpdateSchema: Joi.ObjectSchema = Joi.object<IUpdateCustomerDTO>({
  _id: Joi.string().required(),
  __type: Joi.string().required(),
  userAccountId: Joi.string().required(),
  changes: Joi.object().required(),
});

export default CustomerUpdateSchema;
