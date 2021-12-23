import Joi from "joi";
import ICustomerInteraction from "../../entity/ICustomerInteraction";
import InteractionType from "../../enums/InteractionType";
const CustomerInteractionCreateSchema: Joi.ObjectSchema = Joi.object<ICustomerInteraction>({
  notes: Joi.string().max(50).min(3).trim().required(),
  type: Joi.string().valid(InteractionType).required(),
});

export default CustomerInteractionCreateSchema;
