import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Input from "../../Input/Input";
import jsonData from "../DummyProductData.json";
import Modal from "../Modal/Modal";
import "./SearchProduct.css";
import { localBaseUrl } from "../../Urls/Url";
import axios from "axios";
import CreateProduct from "../CreateProduct/CreateProduct";
import LockScreen from "../../Pages/LockScreen";
import Address from "../../Address/Address";

const SearchProduct = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getProductData, setGetProductData] = useState(null);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [searchRes, setSearchRes] = useState(getProductData);

  const carousalStyle = {
    height: "70vh",
  };

  const onClickHandlerShowCreateProduct = () => {
    setShowCreateProduct(!showCreateProduct);
    setShowLoginPage(false);
    setShowSearchPage(false);
    setShowOrder(false);
  };

  const onClickHandlerShowLoginPage = () => {
    setShowLoginPage(!showLoginPage);
    setShowCreateProduct(false);
    setShowSearchPage(false);
    setShowOrder(false);
  };

  const onClickHandlerShowSearchPage = () => {
    setShowSearchPage(!showSearchPage);
    setShowLoginPage(false);
    setShowCreateProduct(false);
    setShowOrder(false);
  };

  const onClickHandlerOrder = () => {
    setShowOrder(!showOrder);
  };

  useEffect(() => {
    axios
      .get(localBaseUrl + "/api/v1/public/product/all")
      .then((item) => setGetProductData(item.data.data))
      .catch((err) => console.log(err));
  }, []);

  //   useEffect(() => {
  //     console.log(getProductData);
  //   }, [getProductData]);

  const onChangeHandlerSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    // let clone = [...getProductData];
    // setSearchRes(
    //   getProductData.filter(function (name) {
    //     return name.name.toLowerCase().includes(e.target.value.toLowerCase());
    //   })
    // );
  };

  const filteredData = getProductData?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredData);
  //   const searchValue = (searchTerm) => {
  //     var value = jsonData.filter(function (item) {
  //       return item.name.toLowerCase() === searchTerm.toLowerCase();
  //     });
  //     setSearchRes([...searchRes, value]);
  //   };

  //   useEffect(() => {
  //     searchValue(searchTerm);
  //   }, [searchTerm]);

  //   let res = null;

  //   const onSubmitHandlerSearchTerm = (e) => {
  //     e.preventDefault();
  //     // console.log(searchTerm);
  //     console.log(searchRes);
  //   };

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1 className="display-5  mt-3 mb-3">Show All the Products</h1>
          <div className="mt-4">
            <Button
              variant="contained"
              onClick={onClickHandlerShowSearchPage}
              style={{ marginRight: "5px", padding: "10px 35px 10px 35px" }}
            >
              SearchPage
            </Button>
            <Button
              variant="contained"
              onClick={onClickHandlerShowLoginPage}
              style={{ marginRight: "5px", padding: "10px 35px 10px 35px" }}
            >
              Login/SignUp
            </Button>
            <Button
              variant="contained"
              onClick={onClickHandlerShowCreateProduct}
              style={{ padding: "10px 35px 10px 35px" }}
            >
              CreateProduct
            </Button>
          </div>
        </div>

        {!showOrder && (
          <>
            {!showCreateProduct && !showLoginPage ? (
              <>
                <div className="row mb-3 mt-2 m-3 ">
                  <div className="col  ">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control w-25 "
                          name="searchTerm"
                          value={searchTerm}
                          onChange={onChangeHandlerSearchTerm}
                          placeholder="Search"
                        />
                      </div>
                      {/* <Modal /> */}
                    </form>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-md-12 d-flex justify-content-center">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide border border-2 border-dark w-100 sp0 "
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                          <img
                            src="https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg"
                            className="d-block w-75"
                            alt="..."
                            style={carousalStyle}
                          />
                        </div>
                        <div className="carousel-item text-center">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Jackfruit_hanging.JPG"
                            className="d-block w-75"
                            alt="..."
                            style={carousalStyle}
                          />
                        </div>
                        <div className="carousel-item text-center">
                          <img
                            src="https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg"
                            className="d-block w-75"
                            alt="..."
                            style={carousalStyle}
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  {filteredData?.map((item) => (
                    <>
                      <div
                        className="col-md-4 m-2 text-center  sp1"
                        key={item.id}
                        style={{ width: "30%" }}
                      >
                        <img
                          src={item.imageList?.map((data) => {
                            return data;
                          })}
                          alt={item.name}
                          style={{
                            position: "relative",
                            width: "60%",
                            height: "35vh",
                            paddingTop: "10px",
                          }}
                        />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <h2>Rs.{item.price}</h2>
                        <Button
                          variant="contained"
                          onClick={onClickHandlerOrder}
                          style={{ marginBottom: "8px" }}
                        >
                          Order
                        </Button>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ) : null}
          </>
        )}

        {showCreateProduct && (
          <>
            <CreateProduct />
          </>
        )}
      </div>

      {showLoginPage && (
        <>
          <LockScreen />
        </>
      )}

      {showOrder && (
        <>
          <Address />
        </>
      )}
    </>
  );
};

export default SearchProduct;
