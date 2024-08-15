import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PepperDetailsPage from "./pages/PepperDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeToggle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pepper/:id" element={<PepperDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
