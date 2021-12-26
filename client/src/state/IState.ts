import IAuthState from "./auth_context/IAuthState";
import ICustomerProfileContext from "./customers_context/customers_profile_context/ICustomerProfileState";
import ICustomerLisState from "./customers_context/customers_list_context/ICustomerLisState";
import IAddCustomerFormState from "./customers_context/customers_add_form_context/IAddCustomerFormState";
export default interface IState {
  AUTH_CONTEXT: IAuthState;
  CUSTOMER_PROFILE_CONTEXT: ICustomerProfileContext;
  CUSTOMERS_LIST_CONTEXT: ICustomerLisState;
  ADD_CUSTOMER_FORM_CONTEXT: IAddCustomerFormState;
}
