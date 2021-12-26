import IState from "./IState";
import ProfileDefaults from "./customers_context/customers_profile_context/Defaults";
import AuthDefaults from "./auth_context/AuthDefaults";
import CustomersListDefault from "./customers_context/customers_list_context/CustomersListDefault";
import AddCustomerFormDefault from "./customers_context/customers_add_form_context/AddCustomerFormDefault";

const DefaultState: IState = {
  AUTH_CONTEXT: AuthDefaults,
  CUSTOMER_PROFILE_CONTEXT: ProfileDefaults,
  CUSTOMERS_LIST_CONTEXT: CustomersListDefault,
  ADD_CUSTOMER_FORM_CONTEXT: AddCustomerFormDefault,
};

export default DefaultState;
