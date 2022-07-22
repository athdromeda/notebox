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
      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap relative w-80 px-5 bg-slate-800">
        <input id="title" ref={titleRef} className="bg-slate-800  " />
        <textarea id="content" ref={contentRef} className="bg-slate-800" />
        <button type="submit" className="bg-sky-500 border-0 p-2">TAMBAH</button>
      </form>
  );
};

export default InputNote;
