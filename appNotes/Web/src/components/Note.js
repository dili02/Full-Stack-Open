import React from "react";

const Note = ({ content, date, important, toggleImportance }) => {
  const label = important ? "make not important" : "make important";

  return (
    <li className="note">
      {content} {date}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
