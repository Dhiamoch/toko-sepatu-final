import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../axios/productAxios";
import convertRupiah from "rupiah-format";

const PumaPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((result) => setProducts(result));
  }, []);

  return (
    <div>
      <div className="logo-page">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Puma_AG.svg/1200px-Puma_AG.svg.png"></img>
      </div>
      <div className="container shop-content">
        {products.length > 0 ? (
          products.map((product) => {
            const { name, image, size, price, brand, stock, brand_Id } = product;
            if (brand_Id === 3) {
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
                    <a href="/" className="btn btn-dark btn-md ">
                      <FontAwesomeIcon icon={faCartPlus} className="mx-2" />
                      add to cart
                    </a>
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
    </div>
  );
};

export default PumaPage;
