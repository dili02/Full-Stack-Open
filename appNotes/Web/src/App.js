import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hookGetData = () => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  };

  useEffect(hookGetData, []);

  const handleNoteChange = (event) => setNewNote(event.target.value);

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <ul>
      <h1>NOTES APP</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      {notesToShow.map((note) => (
        <Note key={note.id} content={note.content} date={note.date} />
      ))}
    </ul>
  );
};

export default App;
