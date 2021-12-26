import React, { useContext } from "react";
import { State } from "../../state/State";
import { useNavigate } from "react-router";
import customerTypes from "../../enums/customerTipes";

//components
import {
  EmailInput,
  LastNameInput,
  NameInput,
  PhoneInput,
  CustomerType,
  CustomerCategory,
} from "../../components/inputs";

const CustomerCreate: React.FC = () => {
  //destructuring from state

  const { ADD_CUSTOMER_FORM_CONTEXT, CUSTOMER_PROFILE_CONTEXT, CUSTOMERS_LIST_CONTEXT } =
    useContext(State);

  const handle = ADD_CUSTOMER_FORM_CONTEXT.API.HANDLE_FORM_INPUT;
  const { formState } = ADD_CUSTOMER_FORM_CONTEXT.STATE;
  const { UPDATE_CURRENT_PROFILE, SET_CURRENT_PROFILE } = CUSTOMER_PROFILE_CONTEXT.API;

  const Navigate = useNavigate();

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const customerAdded = await CUSTOMERS_LIST_CONTEXT.API.ADD_CUSTOMER(formState);
    if (customerAdded) {
      await SET_CURRENT_PROFILE(customerAdded);
      await UPDATE_CURRENT_PROFILE();
      ADD_CUSTOMER_FORM_CONTEXT.API.RESET_FORM();
      setTimeout(() => Navigate("/profile"), 2000);
    }
  };

  //change the displayed inputs depending in hte customer type

  const isPerson = () => (formState.__type === customerTypes.Business ? false : true);
  return (
    <div className="page" id="add-update-customer-page">
      <form id="add-update-customer-form" method="post" onSubmit={handlesubmit}>
        <h2>New Customer</h2>
        <br />
        <CustomerType onchage={handle} value={formState.__type} />
        <NameInput onchage={handle} value={formState.name} isPerson={isPerson} />
        {isPerson() && <LastNameInput onchage={handle} value={formState.lastName} />}
        <PhoneInput onchage={handle} value={formState.phone} />
        <EmailInput onchage={handle} value={formState.email} />
        <CustomerCategory onchage={handle} value={formState.category} />
        <input id="add-update-customer-form-submit" type="submit" value="Add Customer" />{" "}
      </form>
    </div>
  );
};
export default CustomerCreate;
