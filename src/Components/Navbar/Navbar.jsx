import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockScreen from "../Pages/LockScreen";
import CreateProduct from "../Products/CreateProduct/CreateProduct";
import SearchProduct from "../Products/SearchProduct/SearchProduct";
import Address from "../Address/Address";
import Layout from "./Layout";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchProduct />} />
            <Route path="/orders" element={<Address />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
