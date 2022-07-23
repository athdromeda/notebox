import React from "react";
import NoteItem from "./NoteItem";

const Notes = ({ notelist, onDelete, setForm }) => {
  return (
    <ul className="p-0 flex flex-row flex-wrap list-none">
      {notelist.map((e) => (
        <NoteItem e={e} onDelete={onDelete} />
      ))}
      <li className="add-note-hover h-40" 
      onClick={()=>setForm(true)}>Tambahkan note</li>
    </ul>
  );
};

export default Notes;
