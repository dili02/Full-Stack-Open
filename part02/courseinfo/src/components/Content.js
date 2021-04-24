import React from "react";
import Part from "./Part";
import TotalExercises from "./TotalExercises";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}
      <TotalExercises parts={parts} />
    </>
  );
};

export default Content;
