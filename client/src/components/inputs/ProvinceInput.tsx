import React from "react";
import IInputProps from "./IInputProps";
import provinces from "../../enums/provinces";

const ProvinceInput: React.FC<IInputProps> = ({ onchage, value }) => {
  return (
    <select
      id="add-update-customer-province"
      name="Province"
      defaultValue="Distrito Nacional"
      onChange={onchage}
      value={value}
    >
      {/*maping the enum  to a dropdown*/}
      {(Object.keys(provinces) as Array<keyof typeof provinces>).map((province) => (
        <option value={province}>{province}</option>
      ))}
    </select>
  );
};
export default ProvinceInput;
