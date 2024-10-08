import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PepperDetailsPage() {
  const { id } = useParams();
  const [pepper, setPepper] = useState(null);

  useEffect(() => {
    fetch(`https://pilipili-moto-server.vercel.app/peppers/${id}`)
      .then((response) => response.json())
      .then((data) => setPepper(data))
      .catch((error) => console.error("Error fetching pepper details:", error));
  }, [id]);

  if (!pepper) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div>
        <h2>{pepper.name}</h2>
        <p>
          <strong>Type:</strong> {pepper.type}
        </p>
        <p>
          <strong>Heat Level:</strong> {pepper.heatLevel}
        </p>
        <p>
          <strong>Price:</strong> Ksh.{pepper.price}
        </p>
        <p>
          <strong>Description:</strong> {pepper.description}
        </p>
        <img
          src={pepper.image}
          alt={pepper.name}
          style={{ width: "300px", height: "300px", borderRadius: "15px" }}
        />
      </div>
      <div>
        <Link to="/">
          <button className="btnPepper">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PepperDetailsPage;
