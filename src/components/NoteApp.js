import React, { useEffect, useReducer } from "react";
import db from "../firebase";
import notesReducer from "../reducers/notes";
import NoteList from "../components/NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

export const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    db.ref("notes")
      .once("value")
      .then((snapshot) => {
        const notes = [];
        snapshot.forEach((childSnapshot) => {
          notes.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        dispatch({ type: "POPULATE_NOTES", notes });
      });
  }, []);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <div className="box-layout">
        <h1>Notes</h1>
        <AddNoteForm />
        <NoteList />
      </div>
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
