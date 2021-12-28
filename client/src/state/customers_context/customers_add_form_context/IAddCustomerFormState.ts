import { ChangeEvent } from "react";
import ICustomer from "../../../models/ICustomer";

export default interface IAddCustomerFormState {
  STATE: {
    formState: ICustomer;
  };
  API: {
    HANDLE_FORM_INPUT: (e: ChangeEvent<HTMLInputElement>) => void;
    RESET_FORM: () => void;
  };
}
