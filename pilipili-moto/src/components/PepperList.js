import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function PepperList() {
  const [peppers, setPeppers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/peppers")
      .then((response) => response.json())
      .then((data) => setPeppers(data));
  }, []);

  const filteredPeppers = peppers.filter((pepper) =>
    pepper.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      {filteredPeppers.map((pepper) => (
        <div key={pepper.id}>
          <Link to={`/pepper/${pepper.id}`}>
            <h3>{pepper.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PepperList;
