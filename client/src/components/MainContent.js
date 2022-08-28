import React from "react";
import { Route, Routes } from "react-router-dom";
import { NikePage, AdidasPage, PumaPage, HomePage, Cart } from "../pages";

const MainContent = ({ handleClick }) => {
  return (
    <>
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<HomePage handleClick={handleClick} />}></Route>
          <Route path="/category/nike" element={<NikePage />}></Route>
          <Route path="/category/adidas" element={<AdidasPage />}></Route>
          <Route path="/category/puma" element={<PumaPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
