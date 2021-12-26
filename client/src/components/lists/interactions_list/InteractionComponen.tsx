import React, { useContext } from "react";
import { State } from "../../../state/State";

import { BsSearch } from "react-icons/bs";
import ICustomerInteraction from "../../../interfaces/ICustomerInteraction";

interface IInteractionprops {
  interaction: ICustomerInteraction;
}

const InteractionComponent: React.FC<IInteractionprops> = ({ interaction }) => {
  const { CUSTOMER_PROFILE_CONTEXT } = useContext(State);

  const openNote = (e: React.MouseEvent) => {
    e.preventDefault();
    CUSTOMER_PROFILE_CONTEXT.API.TOGGLE_NOTES_DISPLAY(interaction);
  };

  return (
    // pnly show the first 4 chars of the interaction type

    <li className="interaction" key={interaction._id} onClick={openNote}>
      <span>{interaction.type.toUpperCase().substring(0, 4)}</span>{" "}
      <sub>
        {new Date(interaction.updatedAt!!).toLocaleString()}
        {"  "}
      </sub>
      <BsSearch />
    </li>
  );
};
export default InteractionComponent;
