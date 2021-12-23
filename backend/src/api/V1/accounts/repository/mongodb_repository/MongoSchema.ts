import { Schema, model, Model } from "mongoose";
import IAccount from "../../entity/IAccount";

const AccountSchema: Schema = new Schema<IAccount>(
  {
    name: {
      type: String,
      required: true,
      max: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      min: 50,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 50,
    },
  },
  { timestamps: true }
);

const AccountModel: Model<IAccount> = model("account", AccountSchema);
export default AccountModel;
