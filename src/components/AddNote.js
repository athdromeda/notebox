import React from "react";

const AddNote = ({ isFormShown, setForm }) => {
  const handleClick = () => {
    setForm(!isFormShown);
  };
  return (
    <button className="addnote-btn" onClick={handleClick}>
      {isFormShown ? "x" : "+"}
    </button>
  );
};

export default AddNote;