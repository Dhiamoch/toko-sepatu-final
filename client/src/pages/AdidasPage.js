import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../axios/productAxios";
import convertRupiah from "rupiah-format";

const AdidasPage = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const handleClick = (product) => setCart([...cart, product]);
  console.log(cart);

  useEffect(() => {
    getProducts((result) => setProducts(result));
  }, []);

  return (
    <section>
      <div className="logo-page">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"></img>
      </div>
      <div className="container shop-content">
        {products.length > 0 ? (
          products.map((product) => {
            const { name, image, size, price, brand, stock, brand_Id } = product;
            if (brand_Id === 2) {
              return (
                <div className="card p-3">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body ">
                    <p className="text-center">{convertRupiah.convert(price)}</p>
                    <h6 className="card-title">{name}</h6>
                    <hr />
                    <p>
                      {brand.name} | {size}
                    </p>
                  </div>
                  {stock > 0 ? (
                    <button onClick={() => handleClick(product)} className="btn btn-dark btn-md ">
                      <FontAwesomeIcon icon={faCartPlus} className="mx-2" />
                      add to cart
                    </button>
                  ) : (
                    <button type="button" className="btn btn-md btn-danger" disabled>
                      Sold out
                    </button>
                  )}
                </div>
              );
            }
          })
        ) : (
          <div className="text-center">
            <h3>Loading.....</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdidasPage;
