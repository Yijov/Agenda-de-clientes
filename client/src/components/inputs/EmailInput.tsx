import React from "react";
import IInputProps from "./IInputProps";

const EmailInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <input
      type="email"
      name="email"
      id="add-update-customer-email"
      placeholder="Customer Email"
      autoComplete="off"
      onChange={onchage}
      value={value}
    />
  );
};
export default EmailInput;
