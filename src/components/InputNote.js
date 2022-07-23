import React, { useRef, useEffect } from "react";

const InputNote = ({ func, setForm }) => {
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(()=>{
    titleRef.current.focus()
  },[])

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
    if (titleRef.current.value && contentRef.current.value) {
      func((prev) => [...prev, generateNote(titleRef.current.value, contentRef.current.value)]);
      setForm(false);
      // titleRef.current.value = "";
      // contentRef.current.value = "";
    } else {
      alert("Kosong tuh!");
      if(titleRef.current.value === ""){
        titleRef.current.focus()
      }else{
        contentRef.current.focus()
      }
    }

  };

  const handleTitleDown=(ev)=>{
    if(ev.keyCode ===  13){
      contentRef.current.focus()
    }
  }

  return (
      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap sticky w-full h-auto lg:h-screen lg:w-3/4 px-5 py-5 bg-slate">
        <input ref={titleRef} className="bg-slate" placeholder="Judul disini..." onKeyDown={handleTitleDown}/>
        <textarea ref={contentRef} className="bg-slate h-[70vh] lg:h-3/5" placeholder="Tulis catatan disini..." spellCheck="false" />
        <button type="submit" className="bg-primary border-0 p-2">TAMBAH</button>
      </form>
  );
};

export default InputNote;
