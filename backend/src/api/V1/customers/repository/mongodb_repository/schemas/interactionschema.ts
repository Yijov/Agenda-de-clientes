import { Schema } from "mongoose";
import { IInteraction } from "../../../entity";
import InteractionType from "../../../enums/InteractionType";
const InteractionSchema = new Schema<IInteraction>(
  {
    notes: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: InteractionType,
      default: InteractionType.General_information,
      required: true,
    },
  },
  { timestamps: true }
);
export default InteractionSchema;
