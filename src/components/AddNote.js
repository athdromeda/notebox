import React from "react";

const AddNote = ({ isFormShown, setForm }) => {
  const iconAdd = process.env.PUBLIC_URL + "/icons/plus.svg";
  const iconClose = process.env.PUBLIC_URL + "/icons/x.svg"
  const handleClick = () => {
    setForm(!isFormShown);
  };
  return (
    <button className="addnote-btn flex justify-center" onClick={handleClick}>
      <img src={isFormShown? iconClose:iconAdd} alt="toggle-form" />
    </button>
  );
};

export default AddNote;