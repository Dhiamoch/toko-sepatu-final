import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import convertRupiah from "rupiah-format";
import { getCustomers } from "../axios/customerAxios";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [customers, setCustomers] = useState({});

  const [transaction, setTransaction] = useState({
    product_id: [],
    totalprice: "",
    customer_id: "",
  });

  const submitHandler = () => {
    console.log(transaction);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    getCustomers((result) => setCustomers(result));
  }, []);

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container cart my-3">
      <h2 className="cart-header">Your Cart</h2>
      <div className="cart-content">
        {cart.map((item) => (
          <div className="cart-box">
            <img src={item.image} alt="" className="cart-img" />
            <div className="detail-box">
              <div className="cart-product-title">{item.name}</div>
              <span>{item.size}</span>
              <div className="cart-price">{convertRupiah.convert(item.price)}</div>
              <div>
                {/* <button className="btn btn-primary btn-sm mx-2" onClick={() => handleChange(item, 1)}>
                  +
                </button>
                <button className="btn btn-secondary btn-sm mx-2">{item.amount}</button>
                <button className="btn btn-danger btn-sm mx-2" onClick={() => handleChange(item, -1)}>
                  -
                </button> */}
              </div>
            </div>
            <FontAwesomeIcon onClick={() => handleRemove(item.id)} icon={faTrash} />
          </div>
        ))}
      </div>
      <div className="total">
        <div className="total-title">Total</div>
        <div className="total-price">{convertRupiah.convert(price)}</div>
      </div>

      <select className="form-select m-centered mt-3" aria-label="Default select example">
        <option selected>Select Customer</option>
        {customers.length > 0 ? (
          customers.map((customer) => {
            const { id, name, phone } = customer;
            return (
              <option value={id}>
                {name} - {phone}
              </option>
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </select>

      <button onChange={() => setTransaction({ ...transaction, product_id: cart })} type="button" class="btn btn-primary btn-buy">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
