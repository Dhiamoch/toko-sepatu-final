import React, { useState, useEffect } from "react";
import { getProducts } from "../axios/productAxios";
import Cards from "../components/Card";

const HomePage = ({ handleClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((result) => setProducts(result));
  }, []);

  return (
    <section>
      <h1 className="text-center">Sneaker Store</h1>
      <div className="container shop-content">{products.length > 0 ? products.map((item) => <Cards key={item.id} item={item} handleClick={handleClick} />) : <div>Loading...</div>}</div>
    </section>
  );
};

export default HomePage;
