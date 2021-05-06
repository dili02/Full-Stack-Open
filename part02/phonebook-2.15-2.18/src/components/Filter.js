import React from "react";

const Filter = ({ handleChangeSearch }) => (
  <div>
    filter shows with: <input onChange={handleChangeSearch} />
  </div>
);

export default Filter;
