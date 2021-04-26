import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

/* const personsObj = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
]; */

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchTerm, setsearchTerm] = useState("");

  const hookGetData = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hookGetData, []);

  const handleChangeName = (e) => setNewName(e.target.value);

  const handleChangeNumber = (e) => setNewNumber(e.target.value);

  const handleChangeSearch = (e) => {
    setsearchTerm(e.target.value.toLocaleLowerCase());
    setShowAll(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existNewName = persons.filter((person) => person.name === newName);
    if (existNewName.length !== 0) {
      setNewName("");
      setNewNumber("");
      return alert(`${newName} is already added to phonebook`);
    }

    const addPersonToState = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, addPersonToState]);
    setNewName("");
    setNewNumber("");
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLocaleLowerCase().includes(searchTerm)
      );

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter handleChangeSearch={handleChangeSearch} />

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;

/* .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }) */

/* {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))} */
