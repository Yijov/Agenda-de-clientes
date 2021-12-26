import { useState } from "react";

export default function useNotesPanel() {
  //state that handles the note displayed in the  NotesDisplayComponent
  const [displayNotesVisible, setDisplayNotesVisible] = useState(false);
  const [displayNote, setDisplayNote] = useState({});

  //Open and close the notes panel
  const TOGGLE_NOTES_DISPLAY = (note = {}) => {
    setDisplayNote(note);
    setDisplayNotesVisible(!displayNotesVisible);
  };
  return { TOGGLE_NOTES_DISPLAY, displayNote, displayNotesVisible };
}
