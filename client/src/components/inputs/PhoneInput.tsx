import React from "react";
import IInputProps from "./IInputProps";

const PhoneInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <input
      type="text"
      name="phone"
      id="add-update-customer-phone"
      placeholder="Phone Number"
      autoComplete="off"
      onChange={onchage}
      value={value}
    />
  );
};
export default PhoneInput;
