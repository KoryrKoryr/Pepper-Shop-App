import React from "react";

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="">All Heat Levels</option>
      <option value="Mild">Mild</option>
      <option value="Hot">Hot</option>
      <option value="Very Hot">Very Hot</option>
    </select>
  );
}

export default Filter;
