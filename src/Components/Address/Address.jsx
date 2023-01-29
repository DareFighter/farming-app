import React, { useState } from "react";
import Input from "../Input/Input";
import { Button } from "@mui/material";
import { localBaseUrl } from "../Urls/Url";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Address = () => {
  const [addressData, setAddressData] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    streetAddress: "",
    landMark: "",
    state: "",
    townorcity: "",
    postcodezip: "",
    country: "",
    email: "",
    phoneno: "",
  });

  const onChangeHandlerAddressData = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(addressData);
    if (addressData !== null) {
      toast.success("submitted succesfully");
    }
    axios
      .post(localBaseUrl + "/api/v1/address/add", addressData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="display-4 text-center">Add Address</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="container-fluid mt-5 ms-5">
          <div className="row">
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"userId"}
                name="userId"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.userId}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"firstName"}
                name="firstName"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.firstName}
              />
            </div>

            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"lastName"}
                name="lastName"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.lastName}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"streetAddress"}
                name="streetAddress"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.streetAddress}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"landMark"}
                name="landMark"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.landMark}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"state"}
                name="state"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.state}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"townorcity"}
                name="townorcity"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.townorcity}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"postcodezip"}
                name="postcodezip"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.postcodezip}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"country"}
                name="country"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.country}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"email"}
                name="email"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.email}
              />
            </div>
            <div className="col-sm-6 form-group mb-3">
              <Input
                label={"phoneno"}
                name="phoneno"
                sx={{ width: 600 }}
                handleChange={onChangeHandlerAddressData}
                value={addressData.phoneno}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col text-end">
              <Button
                variant="contained"
                type="submit"
                style={{ marginRight: "140px", padding: "10px 35px 10px 35px" }}
              >
                Add Address
              </Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Address;
