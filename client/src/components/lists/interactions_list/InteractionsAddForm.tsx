import React, { useContext } from "react";
import { State } from "../../../state/State";
import PageSubtitle from "../../section_sub_header/PageSubHeader";
import InteractionType from "../../../enums/InteractionType";
import ICustomer from "../../../models/ICustomer";

const InteractionAddForm: React.FC = () => {
  const { CUSTOMER_PROFILE_CONTEXT } = useContext(State);
  const { HADLE_INTERACTIONS_FORM_INPUT, TOGGLE_INTERACTIONS_FORM } = CUSTOMER_PROFILE_CONTEXT.API;

  const { currentProfile, interaction, interactionFormVisible } = CUSTOMER_PROFILE_CONTEXT.STATE;

  const addInteraction = async (e: React.FormEvent) => {
    e.preventDefault();
    //make a deep copy of the current customer on profile
    let toBeUpdated: ICustomer = JSON.parse(JSON.stringify(currentProfile));

    //post to database for the changes to be appyed
    await CUSTOMER_PROFILE_CONTEXT.API.ADD_INTERACTION(toBeUpdated._id!!, interaction);

    //close the form
    TOGGLE_INTERACTIONS_FORM(e);
  };

  return (
    (interactionFormVisible && (
      <div className="interaction-Add-form">
        <PageSubtitle title="ADD INTERACTION" />
        <form onSubmit={addInteraction}>
          <div className="radios">
            <input
              type="radio"
              value="info"
              name="type"
              checked={interaction.type === InteractionType.General_information}
              onChange={HADLE_INTERACTIONS_FORM_INPUT}
            />{" "}
            info
            <input
              type="radio"
              value="sale"
              name="interactionType"
              checked={interaction.type === InteractionType.Sale}
              onChange={HADLE_INTERACTIONS_FORM_INPUT}
            />{" "}
            Sale
            <input
              type="radio"
              value="collection"
              name="type"
              checked={interaction.type === InteractionType.Collection}
              onChange={HADLE_INTERACTIONS_FORM_INPUT}
            />{" "}
            Collection
            <input
              type="radio"
              value="feedback"
              name="type"
              checked={interaction.type === InteractionType.Customer_Feedback}
              onChange={HADLE_INTERACTIONS_FORM_INPUT}
            />{" "}
            Feedback
          </div>
          <textarea
            id="notes"
            typeof="text-area"
            itemType="text-area"
            name="notes"
            placeholder="your notes"
            autoComplete={"off"}
            required
            onChange={HADLE_INTERACTIONS_FORM_INPUT}
            value={interaction.notes}
          />
          <input type="submit" id="save-button" value="Save" />
        </form>
        <button onClick={TOGGLE_INTERACTIONS_FORM}>Cancel</button>
      </div>
    )) || <div></div>
  );
};

export default InteractionAddForm;
