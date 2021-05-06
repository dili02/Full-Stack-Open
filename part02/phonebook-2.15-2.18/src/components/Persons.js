import React from "react";

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>DELTE</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
