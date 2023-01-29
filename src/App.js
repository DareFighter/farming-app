import React from "react";
import Address from "./Components/Address/Address";
import Navbar from "./Components/Navbar/Navbar";
import LockScreen from "./Components/Pages/LockScreen";
import CreateProduct from "./Components/Products/CreateProduct/CreateProduct";
import SearchProduct from "./Components/Products/SearchProduct/SearchProduct";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <CreateProduct /> */}
      <SearchProduct />
      {/* <Address /> */}
    </div>
  );
};

export default App;
