import React, { useRef } from "react";

const InputNote = ({ func, setForm }) => {
  const titleRef = useRef();
  const contentRef = useRef();

  const generateNote = (title, content) => {
    return {
      id: new Date().getTime(),
      title: title,
      content: content,
      tags: content
        .split(" ")
        .filter((w) => w.startsWith("#"))
        .map((w) => w.substring(1)),
      colorCode: 1,
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let title = ev.target.elements.title.value;
    let content = ev.target.elements.content.value;
    if (title && content) {
      func((prev) => [...prev, generateNote(title, content)]);
      setForm(false);
    } else {
      alert("Kosong tuh!");
    }

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
      <form onSubmit={handleSubmit} className="overlay">
        <input id="title" ref={titleRef} />
        <textarea id="content" ref={contentRef} />
        <button type="submit">TAMBAH</button>
      </form>
  );
};

export default InputNote;
