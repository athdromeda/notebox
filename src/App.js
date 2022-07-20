import React, { useState, useEffect, useRef } from "react";
import InputNote from "./components/InputNote";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import "./App.css";
import initialData from "./utils";

const SearchBar = ({onSetQuery})=>{
  const input = useRef()

  const handleInput=()=>{
    onSetQuery(input.current.value)
  }
  return <input ref={input} onInput={handleInput} placeholder="Cari catatan..."/>
}

const TagsBar = ({ notes, onSetQuery }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(notes.map(e => e.tags))
    // .map(c => `${c} ini`)))
  }, [notes])

  const handleClick = ()=>{

  }
  
  return (
    <section className="tag-bar">
      {tags.map((e, i) => (
        <p key={i} className="tag-item">#{e}</p>
      ))}
    </section>
  );
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState(initialData);
  const [query, setQuery] = useState('')

  const [archive, setArchive] = useState([])

  useEffect(() => {
    setArchive(note.filter(e => e.content.toLowerCase().includes(query)))
  }, [note, query])
  

  const deleteNote = (id) => {
    setNote((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <>
    <SearchBar onSetQuery={setQuery}/>
      <TagsBar notes={note} onSetQuery={setQuery}/>
      {showForm && <InputNote func={setNote} setForm={setShowForm} />}
      <Notes notelist={archive} onDelete={deleteNote} />
      <AddNote isFormShown={showForm} setForm={setShowForm} />
    </>
  );
}

export default App;
