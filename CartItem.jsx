import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  // ------------------ Handlers ------------------
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
    } else {
      alert("🚀 Checkout feature coming soon!");
    }
  };

  // ------------------ Total Cart Amount ------------------
  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ------------------ UI ------------------
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "20px"
            }}
          >
            {/* Image */}
            <img src={item.image} alt={item.name} width="100" />

            {/* Details */}
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>

              {/* Quantity Controls */}
              <div>
                <button onClick={() => handleIncrement(item)}>+</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => handleDecrement(item)}>-</button>
              </div>

              {/* Delete */}
              <button
                onClick={() => handleDelete(item.id)}
                style={{ marginTop: "5px", background: "red", color: "white" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Total */}
      <h2>Total Cart Amount: ${totalCartAmount}</h2>

      {/* Actions */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleCheckout} style={{ marginRight: "10px" }}>
          Checkout
        </button>

        <button onClick={() => navigate("/plants")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItem;
