import React from "react";

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select
      id="heatLevelFilter"
      name="heatLevelFilter"
      onChange={handleFilterChange}
    >
      <option value="">All Heat Levels</option>
      <option value="None">None</option>
      <option value="Mild">Mild</option>
      <option value="Mild to Hot">Mild to Hot</option>
      <option value="Hot">Hot</option>
      <option value="Very Hot">Very Hot</option>
      <option value="Extremely Hot">Extremely Hot</option>
    </select>
  );
}

export default Filter;
