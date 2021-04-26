import React from "react";

const TotalExercises = ({ parts }) => (
  <h3>
    {`Total of ${parts.reduce(
      (acc, parts) => acc + parts.exercises,
      0
    )} exercises.`}
  </h3>
);

export default TotalExercises;
