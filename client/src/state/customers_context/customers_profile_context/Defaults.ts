import { ChangeEvent } from "react";
import ICustomer from "../../../interfaces/ICustomer";
import ICustomerProfileContext from "./ICustomerProfileState";
import InteractionType from "../../../enums/InteractionType";
import customerTypes from "../../../enums/customerTipes";
import customerCategories from "../../../enums/customerCategories";
import ICustomerInteraction from "../../../interfaces/ICustomerInteraction";

const ProfileDefaults: ICustomerProfileContext = {
  API: {
    SET_CURRENT_PROFILE: function (customer: ICustomer): void {
      throw new Error("Function not implemented.");
    },
    UPDATE_CURRENT_PROFILE: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    HADLE_INTERACTIONS_FORM_INPUT: function (e: ChangeEvent): void {
      throw new Error("Function not implemented.");
    },
    TOGGLE_INTERACTIONS_FORM: function (e: React.MouseEvent): void {
      throw new Error("Function not implemented.");
    },
    TOGGLE_NOTES_DISPLAY: function (note?: {}): void {
      throw new Error("Function not implemented.");
    },
    ADD_INTERACTION: function (
      customerid: string,
      Interaction: ICustomerInteraction
    ): Promise<void> {
      throw new Error("Function not implemented.");
    },
  },
  STATE: {
    currentProfile: {
      __type: customerTypes.Person,
      userAccountId: " ",
      name: "",
      phone: "",
      email: "",
      category: customerCategories.Lead,
      owes: 0,
      isOwed: 0,
      address: [],
      interactions: [],
    },
    interaction: { notes: "", type: InteractionType.General_information },
    interactionFormVisible: false,
    displayNotesVisible: false,
    displayNote: {},
  },
};
export default ProfileDefaults;
