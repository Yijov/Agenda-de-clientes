import React from "react";
import IInputProps from "./IInputProps";

const NameInput: React.FC<IInputProps> = ({ onchage, value, isPerson }) => {
  const pleachold = () => {
    if (isPerson!!()) {
      return "Customer Name";
    } else {
      return "Company Name";
    }
  };
  return (
    <input
      type="text"
      name="name"
      id="add-update-customer-name"
      placeholder={pleachold()}
      autoComplete="off"
      onChange={onchage}
      value={value}
      required
    />
  );
};
export default NameInput;
