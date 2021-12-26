import React, { createContext, FC } from "react";
import IState from "./IState";
import DefaultState from "./StateDefault";
import AuthState from "./auth_context/AuthState";
import CustomerProfileState from "./customers_context/customers_profile_context/usecustomersProfileStates";
import CustomerListState from "./customers_context/customers_list_context/useCustomerListState";
import AddCustomerFormState from "./customers_context/customers_add_form_context/useAddCustomerFormState";
export const State = createContext<IState>(DefaultState);

export const StateProvider: FC = ({ children }) => {
  const AUTH_CONTEXT = AuthState();
  const CUSTOMER_PROFILE_CONTEXT = CustomerProfileState();
  const CUSTOMERS_LIST_CONTEXT = CustomerListState();
  const ADD_CUSTOMER_FORM_CONTEXT = AddCustomerFormState();

  return (
    <State.Provider
      value={{
        AUTH_CONTEXT,
        CUSTOMER_PROFILE_CONTEXT,
        CUSTOMERS_LIST_CONTEXT,
        ADD_CUSTOMER_FORM_CONTEXT,
      }}
    >
      {children}
    </State.Provider>
  );
};
