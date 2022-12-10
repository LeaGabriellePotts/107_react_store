import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    let nextVal = quantity + 1;
    setQuantity(nextVal);
  }

  function handleDecrease() {
    if (quantity === 1) return;

    let nextVal = quantity - 1;
    setQuantity(nextVal);
  }

  return (
    <div className="qty-picker">
      <button disabled={quantity === 1} onClick={handleDecrease}>
        -
      </button>
      <label>{quantity}</label>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default QuantityPicker;

// render button label with the number 1 button on app.js import Quantity picker and render quantity icker below the heading
