import React from "react";

const CartItem = ({ cartItems, updateQuantity, removeItem, navigate }) => {

  const handleIncrement = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleDecrement(item)}>-</button>

          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ${totalCartAmount}</h3>

      <button onClick={() => alert("Checkout Coming Soon!")}>
        Checkout
      </button>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
