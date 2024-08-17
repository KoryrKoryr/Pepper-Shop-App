import React, { useState, useEffect } from "react";

function About() {
  const [shopInfo, setShopInfo] = useState(null);

  useEffect(() => {
    fetch("https://pilipili-moto-server.vercel.app/shopInfo")
      .then((response) => response.json())
      .then((data) => setShopInfo(data))
      .catch((error) => console.error("Error fetching shop info:", error));
  }, []);

  if (!shopInfo) return <div>Loading...</div>;

  return (
    <div className="about">
      <div>
        <img className="AboutLogo" src="logo.png" alt="Pilipili Moto Logo" />
      </div>
      <div>
        <h2>About {shopInfo.name}:</h2>
        <p>
          Pilipili Moto is your one stop shop for the best chillies in Kenya!
          Our goal is to provide the best products at the best prices.
        </p>
        <p>
          We offer a variety of peppers with varying levels of heat to suite
          your taste so come take a ride on the spicy side!!!
        </p>
        <p>
          <strong>Location:</strong> {shopInfo.location}
        </p>
        <p>
          <strong>Opening Time:</strong> {shopInfo.openingTime}
        </p>
        <p>
          <strong>Closing Time:</strong> {shopInfo.closingTime}
        </p>
      </div>
    </div>
  );
}

export default About;
