import React, { useState } from "react";
import Input from "../Input/Input";
import { Button } from "@mui/material";
import "./SignIn.css";
import SignUp from "../SignUp/SignUp";
import { localBaseUrl } from "../Urls/Url";
import axios from "axios";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const { showAfterLogin, setShowAfterLogin } = useState(false);
  const [res, setRes] = useState(null);

  const [showSignUp, setShowSignUp] = useState(false);

  const onClickHandlerShowSignUp = () => {
    setShowSignUp(true);
  };

  const onChangeHandlerSignInData = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const onSubmitHandlerSignInData = (e) => {
    e.preventDefault();
    console.log(signInData);
    axios
      .post(localBaseUrl + "/api/v1/public/auth/token", signInData)
      .then((res) => setRes(res))
      .catch((err) => console.log(err));
    if (res?.status == 200) {
      setShowAfterLogin(true);
      setShowSignUp(true);
    }
  };
  return (
    <>
      {!showSignUp && (
        <>
          <div className="container">
            <div className="row si0">
              <h1 className="h1 mt-3 text-center">Sign In</h1>
              <div className="col text-center">
                <form onSubmit={onSubmitHandlerSignInData}>
                  <div className="mt-3">
                    <Input
                      label={"email or emailAddress or mobile email"}
                      value={signInData.email}
                      name={"email"}
                      handleChange={onChangeHandlerSignInData}
                      sx={{ width: 400 }}
                    />
                  </div>
                  <div className="mt-3 mb-2">
                    <Input
                      label={"password"}
                      value={signInData.password}
                      handleChange={onChangeHandlerSignInData}
                      name={"password"}
                      sx={{ width: 400 }}
                    />
                  </div>
                  <div className="mb-5 mt-3">
                    <Button
                      variant="contained"
                      style={{
                        padding: "10px 40px 10px 40px",
                        marginRight: "5px",
                      }}
                      type="submit"
                    >
                      Log in
                    </Button>
                    <Button
                      variant="contained"
                      style={{ padding: "10px 35px 10px 35px" }}
                      onClick={onClickHandlerShowSignUp}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {showSignUp && (
        <>
          <SignUp />
        </>
      )}
    </>
  );
};

export default SignIn;
