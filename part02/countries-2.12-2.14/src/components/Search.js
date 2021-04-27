import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      Find Countries: <input onChange={handleSearch} />
    </div>
  );
};

export default Search;
