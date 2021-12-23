import { Schema } from "mongoose";
import { IBuseinesCustomer } from "../../../entity";
import ContactPersonSchema from "./contactPersonSchema";

const BusinessCustomerSchema = new Schema<IBuseinesCustomer>(
  {
    contactPerson: {
      type: [ContactPersonSchema],
      max: 60,
      trim: true,
    },
    RNC: {
      type: String,
      max: 60,
      trim: true,
    },
  },
  { timestamps: true }
);
export default BusinessCustomerSchema;
