import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import IContactInfoProps from "./IContactInfoProps";

const ContactInfoPannel: React.FC<IContactInfoProps> = ({ currentProfile }) => {
  return (
    <div className="contact-info">
      <ol>
        <li>
          <FaPhoneAlt className={"icon"} />
          {currentProfile?.phone || "_______________"}
        </li>
        <li>
          <AiTwotoneMail className={"icon"} />
          {currentProfile?.email || "_______________"}
        </li>
        <li>
          <AiTwotoneHome className={"icon"} />
          {currentProfile?.address?.[0].city || "Distrito Nacional"}
        </li>
        <li>
          <MdAttachMoney className={"icon"} />
          {currentProfile?.owes || "No Debt"}
        </li>
      </ol>
    </div>
  );
};
export default ContactInfoPannel;
