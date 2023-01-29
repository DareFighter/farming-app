import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockScreen from "../Pages/LockScreen";
import CreateProduct from "../Products/CreateProduct/CreateProduct";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LockScreen />}>
            <Route path="/createProduct" element={<CreateProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
