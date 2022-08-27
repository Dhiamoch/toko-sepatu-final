import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../axios/productAxios";
import convertRupiah from "rupiah-format";
import { useCart } from "react-use-cart";

const HomePage = () => {
  const { addItem } = useCart;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((result) => setProducts(result));
  }, []);

  return (
    <div>
      <div className="container shop-content">
        {products.length > 0 ? (
          products.map((product) => {
            const { id, name, image, size, price, brand, stock } = product;
            return (
              <div className="card p-3" id="casual">
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
                  <button className="btn btn-dark btn-md" onClick={() => addItem(id, name, price, size, image)}>
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
          })
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
