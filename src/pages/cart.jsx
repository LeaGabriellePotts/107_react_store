import { useContext } from "react";
import DataContext from "../store/dataContext";
import "./cart.css";

function Cart() {
  const cart = useContext(DataContext).cart;

  return (
    <div className="cart">
      <h1>We have these products ready for you</h1>
      <h3>You have {cart.length} products in the cart </h3>

      {/* //* map eery product into a div with: image, title, price, button to delete */}
      <ul>
        {cart.map((prod) => (
          <div className="prod-row">
            <img src={"/images/" + prod.image}></img>

            <h6>{prod.title}</h6>

            <label>{prod.price}</label>

            <button className="btn btn-sm btn-danger">delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
