import React, { useState, useRef } from "react";
import Sample from "./sample";
import "./App.css";

const InputNote = ({ func }) => {
  const titleRef = useRef();
  const contentRef = useRef();

  const generateNote = (title, content) => {
    return {
      id: new Date().getTime(),
      title: title,
      content: content,
      tags: ["work"],
      colorCode: 1,
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let title = ev.target.elements.title.value;
    let content = ev.target.elements.content.value;
    if (title && content) {
      func((prev) => [...prev, generateNote(title, content)]);
    } else {
      alert("Kosong tuh!");
    }

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="title" ref={titleRef} />
      <textarea id="content" ref={contentRef} />
      <button type="submit">TAMBAH</button>
    </form>
  );
};

const NoteItem = ({ e, onDelete }) => {
  const [btns, setBtns] = useState(false);

  return (
    <li
      key={e.id}
      onMouseOver={() => setBtns(true)}
      onMouseOut={() => setBtns(false)}
    >
      <section>
        <h2>{e.title}</h2>
        <h3>{e.content}</h3>
        <h6>
          {e.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </h6>
      </section>
      {btns && (
        <section>
          <button onClick={() => onDelete(e.id)}>HAPUS</button>
        </section>
      )}
    </li>
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
      <InputNote func={setNote} />
      <Notes notelist={note} onDelete={deleteNote} />
      {/* <Sample/> */}
    </>
  );
}

export default App;
