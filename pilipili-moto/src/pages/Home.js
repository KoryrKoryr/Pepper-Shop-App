import React, { useState, useEffect } from "react";
import PepperList from "../components/PepperList";
import PepperForm from "../components/PepperForm";

function Home() {
  const [peppers, setPeppers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/peppers")
      .then((response) => response.json())
      .then((data) => setPeppers(data))
      .catch((error) => console.error("Error fetching peppers:", error));
  }, []);

  const handleAddPepper = (newPepper) => {
    setPeppers([...peppers, newPepper]);
  };

  return (
    <div className="homeDiv">
      <h2>Welcome to Pilipili Moto!</h2>
      <h3>Available Peppers:</h3>
      <PepperList peppers={peppers} />
      <PepperForm onAddPepper={handleAddPepper} />
    </div>
  );
}

export default Home;
