import DataContext from "./dataContext";
import { useState } from "react";

function GlobalData(props) {
  const [cart, setCart] = useState([]);
  const [fakeUser, setFakeUser] = useState({ name: "TopFun" });

  function addProductToCart(product) {
    //modify an state var wtih obj {} or array[]
    //create a copy, modify the copy, set the copy
    let copy = [...cart];
    copy.push(product);
    setCart(copy);
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: fakeUser,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
