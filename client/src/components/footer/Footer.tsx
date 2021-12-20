import React from "react";
import IFooterProps from "./IFooterProps";

const Footer: React.FC<IFooterProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Footer;
