import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./CreateProduct.css";
import dummyData from "../DummyProductData.json";
import Input from "../../Input/Input";
import { localBaseUrl } from "../../Urls/Url";
import SearchProduct from "../SearchProduct/SearchProduct";
import axios from "axios";
import { createProductBearerToken } from "../../Urls/Url";
import { toast, ToastContainer } from "react-toastify";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    imageList: [],
    description: "",
    name: "",
    price: 0,
    quantity: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [addProduct, setAddProduct] = useState(dummyData);

  const [searchRes, setSearchRes] = useState(addProduct);

  //   const onChangeHandlerProductData = (e) => {
  //     setProductData({ ...productData, [e.target.name]: e.target.value });
  //   };

  const onSubmitHandlerProductData = (e) => {
    e.preventDefault();
    console.log(productData);
    if (productData !== null) {
      toast.success("created successfully");
    }
    setAddProduct([...addProduct, productData]);
    setProductData({
      imageList: [],
      description: "",
      name: "",
      price: "",
      quantity: "",
    });
    axios
      .post(localBaseUrl + "/api/v1/product/add", productData, {
        headers: {
          Authorization: "Bearer " + createProductBearerToken,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // console.log(addProduct);
  };

  const onChangeHandlerSearchTerm = (e) => {
    setSearchTerm(e.target.value);

    setAddProduct(
      addProduct.filter(function (name) {
        return name.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );

    // setSearchRes(
    //   searchRes.filter(function (name) {
    //     return name.name.toLowerCase().includes(e.target.value.toLowerCase());
    //   })
    // );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row cp0" style={{ marginBottom: "120px" }}>
          <h1 className="h1 text-center mt-4 mb-0">Create Product </h1>
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center ">
            <form onSubmit={onSubmitHandlerProductData}>
              <div className="mt-5">
                <input
                  className="form-control "
                  type="file"
                  id="formFile"
                  name="img"
                  value={productData.img}
                  multiple
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      imageList: [e.target.value],
                    })
                  }
                />
              </div>
              <div className="mt-3">
                <Input
                  label={"description"}
                  name="description"
                  value={productData.description}
                  handleChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                  sx={{ width: 500 }}
                />
              </div>
              <div className="mt-3">
                <Input
                  label={"name"}
                  name="name"
                  value={productData.name}
                  handleChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                  sx={{ width: 500 }}
                />
              </div>

              <div className="mt-3">
                <Input
                  label={"price"}
                  name="price"
                  value={productData.price}
                  handleChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                  sx={{ width: 500 }}
                />
              </div>

              <div className="mt-3">
                <Input
                  label={"quantity"}
                  name="quantity"
                  value={productData.quantity}
                  handleChange={(e) =>
                    setProductData({ ...productData, quantity: e.target.value })
                  }
                  sx={{ width: 500 }}
                />
              </div>
              <div className="mt-3 text-center mb-5">
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  style={{ padding: "10px 35px 10px 35px" }}
                >
                  Create Product
                </Button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>

        <div className="row " style={{ marginLeft: "10px", marginTop: "10px" }}>
          <div className="col  ">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-25 "
                  name="searchTerm"
                  value={searchTerm}
                  onChange={onChangeHandlerSearchTerm}
                />
              </div>
              {/* <Modal /> */}
            </form>
          </div>
        </div>

        {/* <div className="row m-3">
          {addProduct.map((item) => (
            <>
              <div
                className="col-md-4 m-2 text-center  sp1"
                key={item.id}
                style={{ width: "30%" }}
              >
                <img
                  src={item.img}
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
              </div>
            </>
          ))}
        </div> */}

        {/* <SearchProduct Array={addProduct} /> */}
      </div>
    </>
  );
};

export default CreateProduct;
