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

  const handleSubmit = () => {
    const createdOn = new Date().toISOString();
    setNotes((notes) => [
      ...notes,
      { title: titleInput, body: bodyInput, createdOn },
    ]);
    setTitleInput("");
    setBodyInput("");
  };

  return (
    <div className="App flex flex-col gap-6">
      <Header />
      <UserInput
        title={titleInput}
        body={bodyInput}
        setTitle={setTitleInput}
        setBody={setBodyInput}
        handleSubmit={handleSubmit}
      />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
