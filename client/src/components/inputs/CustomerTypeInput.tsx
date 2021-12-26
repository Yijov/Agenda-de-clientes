import React from "react";
import IInputProps from "./IInputProps";
import customerTypes from "../../enums/customerTipes";

const CustomerTypeInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <select id="add-update-customer-type" name="type" onChange={onchage} value={value} required>
      <option value="" disabled defaultValue={customerTypes.Person}>
        Customer Type
      </option>
      <option value={customerTypes.Person}>Person</option>
      <option value={customerTypes.Business}>Bussiness</option>
    </select>
  );
};
export default CustomerTypeInput;
