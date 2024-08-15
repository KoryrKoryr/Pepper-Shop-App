import React, { useState } from "react";
import PepperList from "../components/PepperList";
import PepperForm from "../components/PepperForm";

function Home() {
  const [peppers, setPeppers] = useState([]);

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
