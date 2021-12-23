import { Schema } from "mongoose";
import { IContact } from "../../../entity";

const ContactPersonSchema = new Schema<IContact>(
  {
    charge: String,
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: String,
    email: String,
  },
  { timestamps: true }
);
export default ContactPersonSchema;
