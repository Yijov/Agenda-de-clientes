import { Schema } from "mongoose";
import { IAdress } from "../../../entity";

const AddressSchema = new Schema<IAdress>(
  {
    city: String,
    provice: String,
  },
  { timestamps: true }
);
export default AddressSchema;
