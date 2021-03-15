import React, { useState, useRef, useContext } from "react";
import db from "../firebase";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const inputText = useRef();

  const addNote = (e) => {
    e.preventDefault();

    db.ref("notes")
      .push({ title, body })
      .then((ref) => {
        const note = { title, body, id: ref.key };
        dispatch({ type: "ADD_NOTE", note });
      });
    setBody("");
    setTitle("");
    inputText.current.focus();
  };

  return (
    <form className="form" onSubmit={addNote}>
      <input
        ref={inputText}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button className="button">Add note</button>
    </form>
  );
};

export { AddNoteForm as default };
