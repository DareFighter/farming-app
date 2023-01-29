import React, { useState } from "react";
import Input from "../Input/Input";
import { Button } from "@mui/material";
import "./SignUp.css";
import { toast, ToastContainer } from "react-toastify";
import { localBaseUrl } from "../Urls/Url";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    number: "",
    otp: "",
    password: "",
    email: "",
    firstName: "",
    role: "",
  });

  const [showSignUpForm, setSignUpForm] = useState(false);

  const onClickShowSignUpForm = () => {
    setSignUpForm(!showSignUpForm);
    axios
      .post(localBaseUrl + "/api/v1/public/auth/register-send-otp", {
        number: signUpData.number,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onClickResendOtp = () => {
    axios
      .post(localBaseUrl + "/api/v1/public/auth/register-resend-otp", {
        number: signUpData.number,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onChangeHandlerSignUpData = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(signUpData);

    axios
      .post(
        localBaseUrl + "/api/v1/public/auth/register-verify-otp",
        signUpData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row pb-4 s0 ">
          <h1 className="h1 text-center mt-2">Sign Up</h1>
          <div className="col d-flex flex-column justify-content-center align-items-center   ">
            <form onSubmit={onSubmitHandler}>
              <div className="mt-5 ">
                <Input
                  label="number"
                  sx={{ width: 500 }}
                  handleChange={onChangeHandlerSignUpData}
                  value={signUpData.number}
                  name={"number"}
                />
              </div>
              {!showSignUpForm && (
                <>
                  <div className="mt-3 text-center">
                    <Button variant="contained" onClick={onClickShowSignUpForm}>
                      Send Otp
                    </Button>
                  </div>
                </>
              )}

              {showSignUpForm && (
                <>
                  <div className="mt-3">
                    <Input
                      label="OTP"
                      name={"otp"}
                      sx={{ width: 500 }}
                      value={signUpData.otp}
                      handleChange={onChangeHandlerSignUpData}
                    />
                  </div>
                  <div className="mt-3">
                    <Input
                      label="Password"
                      name={"password"}
                      sx={{ width: 500 }}
                      value={signUpData.password}
                      handleChange={onChangeHandlerSignUpData}
                    />
                  </div>
                  <div className="mt-3">
                    <Input
                      label="Email"
                      name={"email"}
                      value={signUpData.email}
                      sx={{ width: 500 }}
                      handleChange={onChangeHandlerSignUpData}
                    />
                  </div>
                  <div className="mt-3 mb-3">
                    <Input
                      label="Your Name"
                      name={"firstName"}
                      value={signUpData.firstName}
                      sx={{ width: 500 }}
                      handleChange={onChangeHandlerSignUpData}
                    />
                  </div>

                  <div className="mt-3 mb-3">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="role"
                        sx={{ width: 500 }}
                        value={signUpData.role}
                        label="Role"
                        onChange={onChangeHandlerSignUpData}
                      >
                        <MenuItem value="ROLE_USER">ROLE_USER</MenuItem>
                        <MenuItem value="ROLE_SELLER">ROLE_SELLER</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="mb-3 d-flex justify-content-end ">
                    <Button
                      style={{ marginRight: "4px" }}
                      variant="contained"
                      type="submit"
                    >
                      Sign Up
                    </Button>

                    <Button variant="contained" onClick={onClickResendOtp}>
                      Resend Otp
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
