import React from "react";
import IInputProps from "./IInputProps";
import customerCategories from "../../enums/customerCategories";

const CustomerCatgoryInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <select
      id="add-update-customer-category"
      name="category"
      onChange={onchage}
      value={value}
      required
    >
      <option value="" disabled defaultValue={customerCategories.Lead}>
        Customer Category
      </option>
      <option value={customerCategories.Lead}>Lead</option>
      <option value={customerCategories.Regular}>Regular</option>
      <option value={customerCategories.Preferential}>Preferential</option>
      <option value={customerCategories.Premium}>Premium</option>
      <option value={customerCategories.Bad}>Bad</option>
    </select>
  );
};
export default CustomerCatgoryInput;
