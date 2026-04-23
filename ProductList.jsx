import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plantsData = {
  "Indoor Plants": [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
    { id: 5, name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Pothos", price: 14, image: "https://via.placeholder.com/100" }
  ],
  "Outdoor Plants": [
    { id: 7, name: "Rose", price: 25, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulip", price: 22, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Sunflower", price: 19, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Lavender", price: 17, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Hibiscus", price: 21, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Jasmine", price: 16, image: "https://via.placeholder.com/100" }
  ],
  "Succulents": [
    { id: 13, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 9, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Sedum", price: 7, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Haworthia", price: 11, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Crassula", price: 10, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Agave", price: 13, image: "https://via.placeholder.com/100" }
  ]
};

const Navbar = ({ cartCount }) => (
  <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#4CAF50", color: "white" }}>
    <div>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/plants" style={{ margin: "10px", color: "white" }}>Plants</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white" }}>
        Cart 🛒 ({cartCount})
      </Link>
    </div>
  </nav>
);

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar cartCount={totalItems} />

      <h1 style={{ textAlign: "center" }}>Plant Shop 🌿</h1>

      {Object.entries(plantsData).map(([category, plants]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
