import InteractionTypes from "../enums/InteractionType";
export default interface ICustomerInteraction {
  _id?: string;
  notes: string;
  type: InteractionTypes;
  updatedAt?: string;
}
