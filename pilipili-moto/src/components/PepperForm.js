import React, { useState } from "react";

function PepperForm({ onAddPepper }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    heatLevel: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.type ||
      !formData.heatLevel ||
      !formData.price
    ) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("http://localhost:5000/peppers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPepper) => {
        onAddPepper(newPepper);
        setFormData({
          name: "",
          type: "",
          heatLevel: "",
          price: "",
          description: "",
          image: "",
        });
      })
      .catch((error) => console.error("Error adding new pepper:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Pepper Name"
        required
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Pepper Type"
        required
      />
      <input
        type="text"
        name="heatLevel"
        value={formData.heatLevel}
        onChange={handleChange}
        placeholder="Heat Level"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Add Pepper</button>
    </form>
  );
}

export default PepperForm;
