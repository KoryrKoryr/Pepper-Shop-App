import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PepperList() {
  const [peppers, setPeppers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/peppers")
      .then((response) => response.json())
      .then((data) => setPeppers(data));
  }, []);

  return (
    <div>
      {peppers.map((pepper) => (
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
