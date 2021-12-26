import { ChangeEvent } from "react";
import IAddCustomerFormState from "./IAddCustomerFormState";
import customerCategories from "../../../enums/customerCategories";
import customerTypes from "../../../enums/customerTipes";

const AddCustomerFormDefault: IAddCustomerFormState = {
  STATE: {
    formState: {
      __type: customerTypes.Person,
      name: "",
      phone: "",
      email: "",
      category: customerCategories.Lead,
      userAccountId: "",
      owes: 0,
      isOwed: 0,
      address: [],
      interactions: [],
    },
  },
  API: {
    HANDLE_FORM_INPUT: function (e: ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    },
    RESET_FORM: function (): void {
      throw new Error("Function not implemented.");
    },
  },
};
export default AddCustomerFormDefault;
