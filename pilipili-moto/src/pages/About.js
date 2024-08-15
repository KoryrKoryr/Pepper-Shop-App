import React, { useState, useEffect } from "react";

function About() {
  const [shopInfo, setShopInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/shopInfo")
      .then((response) => response.json())
      .then((data) => setShopInfo(data))
      .catch((error) => console.error("Error fetching shop info:", error));
  }, []);

  if (!shopInfo) return <div>Loading...</div>;

  return (
    <div>
      <h2>About {shopInfo.name}</h2>
      <p>
        <strong>Opening Time:</strong> {shopInfo.openingTime}
      </p>
      <p>
        <strong>Closing Time:</strong> {shopInfo.closingTime}
      </p>
    </div>
  );
}

export default About;
