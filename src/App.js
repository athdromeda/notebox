import React, { useState, useEffect, useRef } from "react";
import InputNote from "./components/InputNote";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
// import "./App.css";
import "./index.css";
import initialData from "./utils";

const SearchBar = ({ onSetQuery }) => {
  const input = useRef();

  const handleInput = () => {
    onSetQuery(input.current.value);
  };
  return (
    <section className="flex ">
      <input ref={input} onInput={handleInput} placeholder="Cari catatan..." className="bg-slate text-white w-full sm:w-48" />
<img src={process.env.PUBLIC_URL + '/icons/search.svg'} alt="search"/>
    </section>
  );
};

const TagsBar = ({ notes, onSetQuery }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags([...new Set([...notes.map((e) => e.tags)].flat())]);
    // .map(c => `${c} ini`)))
  }, [notes]);

  return (
    <section className="tag-bar hidden sm:flex">
      {tags.map((e, i) => (
        <p key={i} className="tag-item">
          #{e}
        </p>
      ))}
    </section>
  );
};

const Sidebar = () => {
  return <div className="sidebar">
    <img src={process.env.PUBLIC_URL + '/icons/notebox.svg'} alt="notebox" />
  </div>;
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState(initialData);
  const [archive, setArchive] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setArchive(note.filter((e) => e.content.toLowerCase().includes(query)));
  }, [note, query]);

  const deleteNote = (id) => {
    setNote((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="App">
      <aside>
        <Sidebar />
      </aside>
      {showForm && <InputNote func={setNote} setForm={setShowForm} />}
      <main className="w-full bg-slate py-5 px-5 sm:py-10 sm:px-24 float-right">
        <header className="flex justify-end sm:justify-between items-center mb-5">
          <TagsBar notes={note} onSetQuery={setQuery} />
          <SearchBar onSetQuery={setQuery} />
        </header>
        {archive && (
          <Notes
            notelist={archive}
            onDelete={deleteNote}
            setForm={setShowForm}
          />
        )}
        <AddNote isFormShown={showForm} setForm={setShowForm} />
      </main>
    </div>
  );
}

export default App;
