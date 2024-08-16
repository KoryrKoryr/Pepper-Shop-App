// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function PepperDetailsPage() {
//   const { id } = useParams();
//   const [pepper, setPepper] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/peppers/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPepper(data));
//   }, [id]);

//   if (!pepper) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>{pepper.name}</h2>
//       <p>Type: {pepper.type}</p>
//       <p>Heat Level: {pepper.heatLevel}</p>
//       <p>Price: {pepper.price}</p>
//       <p>Description: {pepper.description}</p>
//       <img src={pepper.image} alt={pepper.name} />
//     </div>
//   );
// }

// export default PepperDetailsPage;
