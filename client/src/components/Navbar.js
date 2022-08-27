import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            . Sneak
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link" href="">
                  Cart
                  <FontAwesomeIcon icon={faCartShopping} className="cart-icon mx-2" />
                </Link>
              </li>
              <li class="nav-item dropdown me-3">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Brand
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="casual-category dropdown-item" to="/category/adidas">
                      Adidas
                    </Link>
                  </li>
                  <li>
                    <Link className="running-category dropdown-item" to="/category/nike">
                      Nike
                    </Link>
                  </li>
                  <li>
                    <Link className="sport-category dropdown-item" to="/category/puma">
                      Puma
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
