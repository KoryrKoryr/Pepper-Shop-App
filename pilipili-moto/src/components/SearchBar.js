import React from "react";

function SearchBar({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search peppers..."
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
