import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PepperDetailsPage() {
  const { id } = useParams();
  const [pepper, setPepper] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/peppers/${id}`)
      .then((response) => response.json())
      .then((data) => setPepper(data))
      .catch((error) => console.error("Error fetching pepper details:", error));
  }, [id]);

  if (!pepper) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pepper.name}</h2>
      <p>
        <strong>Type:</strong> {pepper.type}
      </p>
      <p>
        <strong>Heat Level:</strong> {pepper.heatLevel}
      </p>
      <p>
        <strong>Price:</strong> ${pepper.price}
      </p>
      <p>
        <strong>Description:</strong> {pepper.description}
      </p>
      <img
        src={pepper.image}
        alt={pepper.name}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
}

export default PepperDetailsPage;
