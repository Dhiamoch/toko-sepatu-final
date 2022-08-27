import React from "react";
import "./App.css";
import { Navbar, MainContent } from "./components";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <MainContent />
      </CartProvider>
    </div>
  );
}

export default App;
