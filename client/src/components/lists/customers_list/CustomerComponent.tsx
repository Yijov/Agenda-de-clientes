import React, { useContext } from "react";
import { State } from "../../../state/State";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import ICustomerProps from "./ICustomerProps";
import AppRoutes from "../../../enums/AppRoutes";

const CustomerComponent: React.FC<ICustomerProps> = ({ customer }) => {
  const location = useNavigate();
  const { CUSTOMER_PROFILE_CONTEXT } = useContext(State);

  const apenProfile = async () => {
    await CUSTOMER_PROFILE_CONTEXT.API.SET_CURRENT_PROFILE(customer);
    location(AppRoutes.PROFILE);
  };

  return (
    <li onClick={apenProfile} className="customer">
      <p>
        {customer.name} {customer.lastName}
      </p>
      <div>
        <BsThreeDotsVertical />
      </div>
    </li>
  );
};
export default CustomerComponent;
