import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import db from "../firebase";
import useMousePosition from "../hooks/useMousePosition";

export const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  return (
    <div className="note">
      <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>
          {position.x}, {position.y}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            db.ref(`notes/${note.id}`).remove();
            dispatch({ type: "REMOVE_NOTE", id: note.id });
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export { Note as default };
