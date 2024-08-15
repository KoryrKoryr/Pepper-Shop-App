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
    <div>
      <h2>Welcome to Pilipili Moto</h2>
      <PepperForm onAddPepper={handleAddPepper} />
      <PepperList peppers={peppers} />
    </div>
  );
}

export default Home;
