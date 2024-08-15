import React, { useState, useEffect } from "react";

function About() {
  const [shopInfo, setShopInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/shopInfo")
      .then((response) => response.json())
      .then((data) => setShopInfo(data));
  }, []);

  if (!shopInfo) return <div>Loading...</div>;

  return (
    <div>
      <h2>About {shopInfo.name}</h2>
      <p>Opening Time: {shopInfo.openingTime}</p>
      <p>Closing Time: {shopInfo.closingTime}</p>
    </div>
  );
}

export default About;
