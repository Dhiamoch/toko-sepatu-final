import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import convertRupiah from "rupiah-format";

const Cards = ({ item, handleClick }) => {
  const { id, name, image, size, price, brand, stock, brand_Id, amount = 0 } = item;
  return (
    <section>
      <div className="card p-3">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body ">
          <p className="text-center">{convertRupiah.convert(price)}</p>
          <h6 className="card-title">{name}</h6>
          <hr />
          <p>
            {brand.name} | {size}
          </p>
        </div>
        {stock > 0 ? (
          <button onClick={() => handleClick(item)} className="btn btn-dark btn-md ">
            <FontAwesomeIcon icon={faCartPlus} className="mx-2" />
            add to cart
          </button>
        ) : (
          <button onClick={() => handleClick(item)} type="button" className="btn btn-md btn-danger" disabled>
            Sold out
          </button>
        )}
      </div>
    </section>
  );
};

export default Cards;
