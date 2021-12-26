import { useState, ChangeEvent } from "react";
import ProfileDefaults from "./Defaults";

export default function useInteractionsForm() {
  //estate of the interaction to be added to the current profile. Used in the add interaction from
  const [interaction, setInteraction] = useState(ProfileDefaults.STATE.interaction);
  const [interactionFormVisible, setInteractionFormVisible] = useState(false);

  // open and clode the form to create interactions
  const TOGGLE_INTERACTIONS_FORM = (e: React.MouseEvent) => {
    e.preventDefault();
    setInteractionFormVisible(!interactionFormVisible);
    setInteraction(ProfileDefaults.STATE.interaction);
  };

  //transform the input in the AddInteractionsFrom into app state
  const HADLE_INTERACTIONS_FORM_INPUT = (e: ChangeEvent<HTMLInputElement | any>) => {
    let { name, value } = e.target;
    setInteraction({ ...interaction, [name]: value });
  };

  return {
    HADLE_INTERACTIONS_FORM_INPUT,
    TOGGLE_INTERACTIONS_FORM,
    interaction,
    interactionFormVisible,
  };
}
