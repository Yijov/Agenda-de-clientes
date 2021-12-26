import { useState, ChangeEvent } from "react";
import AddCustomerFormDefault from "./AddCustomerFormDefault";

export default function useAddCustomerFormState() {
  const [formState, setFormState] = useState(AddCustomerFormDefault.STATE.formState);

  const HANDLE_FORM_INPUT = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const RESET_FORM = () => {
    setFormState(AddCustomerFormDefault.STATE.formState);
  };

  const ADD_CUSTOMER_FORM_CONTEXT = {
    STATE: {
      formState,
    },
    API: {
      HANDLE_FORM_INPUT,
      RESET_FORM,
    },
  };

  return ADD_CUSTOMER_FORM_CONTEXT;
}
