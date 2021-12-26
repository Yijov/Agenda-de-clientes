import React from "react";
import ICustomerListProps from "./ICustomerListProps";
import Customer from "./CustomerComponent";

const CustomerList: React.FC<ICustomerListProps> = ({ customers }) => {
  return (
    <ul className="customer-list">
      {customers?.map((element) => (
        <Customer customer={element} key={element.name} />
      ))}
    </ul>
  );
};
export default CustomerList;
