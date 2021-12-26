import ICustomer from "../../../interfaces/ICustomer";
import ICustomerInteraction from "../../../interfaces/ICustomerInteraction";
export default interface ICustomerProfileContext {
  API: {
    SET_CURRENT_PROFILE: (customer: ICustomer) => void;
    UPDATE_CURRENT_PROFILE: () => Promise<void>;
    HADLE_INTERACTIONS_FORM_INPUT: (e: React.ChangeEvent) => void;
    TOGGLE_INTERACTIONS_FORM: (e: React.FormEvent | any) => void;
    TOGGLE_NOTES_DISPLAY: (note?: {}) => void;
    ADD_INTERACTION: (customerid: string, Interaction: ICustomerInteraction) => Promise<void>;
  };
  STATE: {
    currentProfile: ICustomer;
    interaction: ICustomerInteraction;
    interactionFormVisible: boolean;
    displayNotesVisible: boolean;
    displayNote: any;
  };
}
