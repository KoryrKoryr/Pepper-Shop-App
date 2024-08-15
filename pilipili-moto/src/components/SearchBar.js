import React from "react";

function SearchBar({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      id="searchBar"
      name="searchBar"
      placeholder="Search peppers..."
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
