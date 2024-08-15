import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#1a1a1a";
    document.body.style.color = isDarkMode ? "#000" : "#e0e0e0";
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
