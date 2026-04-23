import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/products"); // navigates to product listing page
  };

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful indoor plants 🌿</p>

        <button className="start-btn" onClick={handleStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
