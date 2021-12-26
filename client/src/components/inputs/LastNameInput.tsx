import React from "react";
import IInputProps from "./IInputProps";

const LastNameInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <input
      type="text"
      name="lastName"
      id="add-update-customer-lastName"
      placeholder="Customer Last Name"
      autoComplete="off"
      onChange={onchage}
      value={value}
      required
    />
  );
};
export default LastNameInput;
