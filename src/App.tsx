import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { NoteInterface } from "./components/Note";
import Notes from "./components/Notes";
import UserInput from "./components/UserInput";

function App() {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [titleInput, setTitleInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");
  const [onEdit, setOnEdit] = useState<string>("");

  const handleSubmit = () => {
    const id = new Date().toISOString();
    setNotes((notes) => [...notes, { title: titleInput, body: bodyInput, id }]);
    setTitleInput("");
    setBodyInput("");
  };

  const editNote = () => {
    setNotes((notes) => notes.filter((note) => note.id !== onEdit));
    setNotes((notes) => [
      ...notes,
      { title: titleInput, body: bodyInput, id: onEdit },
    ]);
    setTitleInput("");
    setBodyInput("");
    setOnEdit("");
  };

  const handleEdit = (id: string) => {
    const note = notes.filter((note) => note.id === id)[0];
    setOnEdit(note.id);
    setTitleInput(note.title);
    setBodyInput(note.body);
  };

  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App flex flex-col gap-6 w-full">
      <Header />
      <div className="flex flex-col gap-5 items-center">
        <UserInput
          id={onEdit}
          title={titleInput}
          body={bodyInput}
          setTitle={setTitleInput}
          setBody={setBodyInput}
          handleSubmit={handleSubmit}
          editNote={editNote}
        />
        {notes.length === 0 ? (
          <p>Belum ada catatan</p>
        ) : (
          <Notes
            notes={notes}
            selectNote={handleEdit}
            deleteNote={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
