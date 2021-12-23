import { Schema, model } from "mongoose";
import { ICustomer } from "../../../entity";
import PersonCustomerSchema from "./PersonCustomerSchema";
import BusinessCustomerSchema from "./BusinessCustomerSchema";
import AddressSchema from "./addressSchema";
import InteractionSchema from "./interactionschema";
import customerCategories from "../../../enums/customerCategories";
import customerTypes from "../../../enums/customerTipes";

const baseOptions = {
  discriminatorKey: "__type",
  collection: "customer",
  timestamps: true, /// gets timestamps of the time in witvh the emtry was created
};

export const Customer = model<ICustomer>(
  "Customer",
  new Schema(
    {
      userAccountId: {
        type: Schema.Types.ObjectId,
        ref: "account",
        required: true,
      },
      name: {
        type: String,
        required: true,
        max: 50,
        trim: true,
      },
      phone: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      category: {
        type: String,
        trim: true,
        enum: customerCategories,
        default: customerCategories.Lead,
        required: true,
      },
      owes: {
        type: Number,
        max: 1000000,
        default: 0,
      },
      isOwed: {
        type: Number,
        max: 1000000,
        default: 0,
      },

      address: [AddressSchema],
      interactions: [InteractionSchema],
    },
    baseOptions
  )
);
export const Person = Customer.discriminator(customerTypes.Person, PersonCustomerSchema);
export const Business = Customer.discriminator(customerTypes.Business, BusinessCustomerSchema);
