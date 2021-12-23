import { Schema } from "mongoose";
import { IPersonCustomer } from "../../../entity";

const PersonCustomerSchema = new Schema<IPersonCustomer>(
  {
    lastName: {
      type: String,
      max: 50,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default PersonCustomerSchema;
