import React, { useContext } from "react";
import { State } from "../../../state/State";
const NotesDisplay: React.FC = () => {
  const { CUSTOMER_PROFILE_CONTEXT } = useContext(State);

  const closeNote = (e: React.MouseEvent) => {
    e.preventDefault();
    CUSTOMER_PROFILE_CONTEXT.API.TOGGLE_NOTES_DISPLAY();
  };

  return (
    (CUSTOMER_PROFILE_CONTEXT.STATE.displayNotesVisible && (
      <div className="notes-display">
        <p>{new Date(CUSTOMER_PROFILE_CONTEXT.STATE.displayNote.createdAt).toLocaleString()}</p>
        <div className="notes">
          <p>{CUSTOMER_PROFILE_CONTEXT.STATE.displayNote.notes}</p>
        </div>
        <button onClick={closeNote}>Done</button>
      </div>
    )) || <div></div>
  );
};

export default NotesDisplay;
