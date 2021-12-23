import { ObjectSchema } from "joi";
import { ICustomer } from "../entity";
import { IInteraction } from "../entity";
import IUpdateCustomerDTO from "../entity/IUpdateCustomerDTO";
import CustomerCreateSchema from "./validation_schemas/CustomerCreateSchema";
import CustomerUpdateSchema from "./validation_schemas/CustomerUpdateSchema";
import CustomerInteractionCreateSchema from "./validation_schemas/CustomerInteractionCreateSchema";

import { Invalid } from "../../../../errors/custom_errors";

class CustomerValidator {
  //create customer customer

  public validateCustomerCreate = async (DTO: ICustomer) => {
    await this.Validate(CustomerCreateSchema, DTO);
  };

  //updates customer requests

  public ValidateCustomerUpdate = async (DTO: IUpdateCustomerDTO) => {
    await this.Validate(CustomerUpdateSchema, DTO);
  };
  //adding interactions
  public interactionCreate = async (DTO: IInteraction) => {
    await this.Validate(CustomerInteractionCreateSchema, DTO);
  };

  private Validate = async (schema: ObjectSchema, DTO: {}) => {
    const validation = await schema.validate(DTO);
    if (validation.error?.message) {
      throw new Invalid(validation.error?.message);
    }
  };
}

export default CustomerValidator;
