import React, { useState } from "react";
import Navbar from "./component/navbar";
import Cart from "./component/cart"; 
import Products from "./component/products";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, dec) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += dec;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
 return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Products handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick}/>
      )}
    </React.Fragment>
  );
};

export default App;
