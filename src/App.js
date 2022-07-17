import React, { useState } from "react";
import InputNote from "./components/InputNote";
import NoteItem from "./components/NoteItem";
import "./App.css";

const AddNote = ({ isFormShown, setForm }) => {
  const handleClick = () => {
    setForm(!isFormShown);
  };
  return (
    <button className="addnote-btn" onClick={handleClick}>
      {isFormShown ? "x" : "+"}
    </button>
  );
};

const Notes = ({ notelist, onDelete }) => {
  return (
    <ul>
      {notelist.map((e) => (
        <NoteItem e={e} onDelete={onDelete} />
      ))}
    </ul>
  );
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState([
    {
      id: 909,
      title: "Title",
      content: "Content",
      tags: ["work", "personal"],
      colorCode: 1,
    },
  ]);

  const deleteNote = (id) => {
    setNote((prev) => prev.filter((e) => e.id != id));
  };

  return (
    <>
      {showForm && <InputNote func={setNote} setForm={setShowForm}/>}
      <Notes notelist={note} onDelete={deleteNote} />
      <AddNote isFormShown={showForm} setForm={setShowForm} />
    </>
  );
}

export default App;
