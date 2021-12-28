//hooks and functions
import React, { useContext, useEffect } from "react";
import { State } from "../../state/State";
import { useNavigate } from "react-router";
import AppRoutes from "../../enums/AppRoutes";

//components
import InteractionsList from "../../components/lists/interactions_list/InteractionList";
import PageSubHeader from "../../components/section_sub_header/PageSubHeader";
import ContactInfo from "../../components/customer_contact_info_pannel/ContactInfoPannel";
import InteractionAddForm from "../../components/lists/interactions_list/InteractionsAddForm";
import NotesDisplay from "../../components/lists/interactions_list/NotesDisplay";

//icons
import { IoMdTrash } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const CustomerProfile: React.FC = () => {
  const { CUSTOMER_PROFILE_CONTEXT, CUSTOMERS_LIST_CONTEXT } = useContext(State);

  const Navigate = useNavigate();

  const handleDelete = async () => {
    if (
      window.confirm(
        `¿Are you sure you want to delete ${CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile.name}?`
      )
    ) {
      await CUSTOMERS_LIST_CONTEXT.API.DELETE_CUSTOMERS(
        CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile._id!!
      );

      Navigate(AppRoutes.CUSTOMERS);
    }
  };

  useEffect(() => {
    CUSTOMER_PROFILE_CONTEXT.API.UPDATE_CURRENT_PROFILE();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="page customer-profile-page">
      <div className="showcase">
        <div className="action-icons">
          <IoMdTrash className="icon" onClick={handleDelete} />
          <FaEdit className="icon" />
        </div>
        <div className="customerName">
          <h2>
            {CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile.name}{" "}
            {CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile.lastName}
          </h2>

          {CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile.contactPerson && (
            <sub>{CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile.contactPerson}</sub>
          )}
        </div>
      </div>
      <PageSubHeader title={"contacts"} />
      <ContactInfo currentProfile={CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile} />
      <PageSubHeader title={"Interactions"} />
      <InteractionsList currentProfile={CUSTOMER_PROFILE_CONTEXT.STATE.currentProfile} />
      <InteractionAddForm />
      <NotesDisplay />
    </div>
  );
};
export default CustomerProfile;
