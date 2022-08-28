import React, { useState } from "react";
import "./App.css";
import { Navbar, MainContent } from "./components";
import { Cart } from "./pages";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? <MainContent handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />}
    </div>
  );
};

export default App;
