import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="container cart">
      <h2 className="cart-header">Your Cart</h2>
      <div className="cart-content">
        <div className="cart-box">
          <img src={require("../images/1.jpg")} alt="" className="cart-img" />
          <div className="detail-box">
            <div className="cart-product-title">Nike Air Jordan</div>
            <span>Size 41</span>
            <div className="cart-price">Rp 2.500.000</div>
            <input type="Number" value="1" className="cart-quantity" />
          </div>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="total">
        <div className="total-title">Total</div>
        <div className="total-price">Rp 2.500.000</div>
      </div>
      <button type="button" class="btn btn-primary btn-buy">
        Checkout
      </button>
      <FontAwesomeIcon icon={faX} className="cart-close" />
    </div>
  );
};

export default Cart;
