import React from "react";
import IInputProps from "./IInputProps";

const EmailInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <input
      type="text"
      name="contactPerson"
      id="add-update-customer-contactPerson"
      placeholder="Person to be contacted"
      autoComplete="off"
      onChange={onchage}
      value={value}
      required
    />
  );
};
export default EmailInput;
