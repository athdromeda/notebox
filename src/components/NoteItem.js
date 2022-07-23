import React, { useState } from "react";

const NoteItem = ({ e, onDelete }) => {
  const [btns, setBtns] = useState('block');

  return (
    <li
      className="note-item"
      key={e.id}
      onMouseOver={() => setBtns('block')}
      onMouseOut={() => setBtns('hidden')}

    >
      <section className="">
        <h2 className="font-bold">{e.title}</h2>
        <article>{e.content}</article>
        <h6 className="flex">
          {e.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </h6>
      </section>
        <section className={"absolute bottom-2 right-2 " + btns}>
          <button onClick={() => onDelete(e.id)}>
              <img src={process.env.PUBLIC_URL + "/icons/delete.svg"} alt="delete"/>
          </button>
          <button>
            <img src={process.env.PUBLIC_URL + "/icons/edit.svg"} alt="edit" />
          </button>
        </section>
    </li>
  );
};

export default NoteItem;
