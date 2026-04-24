import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="background-image">
          <div className="overlay">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Your one-stop shop for beautiful plants 🌿</p>

            <button onClick={() => setShowProductList(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
