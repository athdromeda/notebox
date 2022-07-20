import React, { useState, useRef } from "react";

const NoteItem = ({ e, onDelete }) => {
  const [btns, setBtns] = useState(false);

  return (
    <li
      className="note-item"
      key={e.id}
      onMouseOver={() => setBtns(true)}
      onMouseOut={() => setBtns(false)}
    >
      <section>
        <h2>{e.title}</h2>
        <a>{e.content}</a>
        <h6>
          {e.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </h6>
      </section>
      {btns && (
        <section>
          <button onClick={() => onDelete(e.id)}>
              <img src={process.env.PUBLIC_URL + "/icons/delete.svg"}/>
          </button>
        </section>
      )}
    </li>
  );
};

export default NoteItem;
