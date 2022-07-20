import React from "react";
import NoteItem from "./NoteItem";

const Notes = ({ notelist, onDelete }) => {
  return (
    <ul>
      {notelist.map((e) => (
        <NoteItem e={e} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Notes;
