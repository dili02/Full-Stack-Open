import React from "react";

const Note = ({ content, date }) => (
  <li>
    <p>{content}</p>
    <time>{date}</time>
  </li>
);

export default Note;
