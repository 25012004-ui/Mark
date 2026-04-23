import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

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

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart 🛒</h1>

      {cartItems.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <h2>Total Cart Amount: ${totalCartAmount}</h2>

      <button onClick={() => alert("Checkout Coming Soon!")}>
        Checkout
      </button>

      <button onClick={() => navigate("/plants")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
