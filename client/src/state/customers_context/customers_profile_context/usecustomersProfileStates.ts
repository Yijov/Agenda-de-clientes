import { useState } from "react";
import useNotesPanel from "./useNotesPannel";
import useInteractionsForm from "./useInteractionsForm";
import ICustomer from "../../../models/ICustomer";
import ProfileDefaults from "./Defaults";
import ICustomerInteraction from "../../../models/ICustomerInteraction";
import CustomersAPI from "../../../data/apis/CustomersAPI";
import { toast } from "react-toastify";

const api = new CustomersAPI();

export default function useCustomerProfileState() {
  //customer to be displayed on the customer profile page
  const [currentProfile, setcurrentProfile] = useState<ICustomer>(
    ProfileDefaults.STATE.currentProfile
  );

  /*including substates*/

  // notes panel state
  const { TOGGLE_NOTES_DISPLAY, displayNote, displayNotesVisible } = useNotesPanel();

  //interactions form state
  const {
    HADLE_INTERACTIONS_FORM_INPUT,
    TOGGLE_INTERACTIONS_FORM,
    interactionFormVisible,
    interaction,
  } = useInteractionsForm();

  // save the customer on the current profile to the local host so that it persists between refresg
  const SET_CURRENT_PROFILE = (customer?: ICustomer) => {
    localStorage.setItem("profile", JSON.stringify(customer));
  };
  //
  //convert the currentCustomer from localstorage  into appstate
  const UPDATE_CURRENT_PROFILE = async () => {
    setcurrentProfile(JSON.parse(localStorage.getItem("profile")!!));
  };

  const ADD_INTERACTION = async (customerid: string, Interaction: ICustomerInteraction) => {
    let response = await api.ADD_INTERACTION(customerid, Interaction);
    if (response.success) {
      toast.success("Interaction Added");
      SET_CURRENT_PROFILE(response.payload);
      UPDATE_CURRENT_PROFILE();

      return;
    } else {
      toast.error("Unable to Update Customer. Please, verify your connection");
    }
  };

  //abstracting before exporting
  //the API contains all the methods to modify the state and the STATE contains all relavant pieces of stata

  const CUSTOMER_PROFILE_CONTEXT = {
    API: {
      SET_CURRENT_PROFILE,
      UPDATE_CURRENT_PROFILE,
      HADLE_INTERACTIONS_FORM_INPUT,
      TOGGLE_INTERACTIONS_FORM,
      TOGGLE_NOTES_DISPLAY,
      ADD_INTERACTION,
    },
    STATE: {
      currentProfile,
      interaction,
      interactionFormVisible,
      displayNotesVisible,
      displayNote,
    },
  };

  return CUSTOMER_PROFILE_CONTEXT;
}
