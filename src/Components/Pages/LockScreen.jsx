import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import { Button } from "@mui/material";

const LockScreen = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center display-6 mt-2">
            Farming Management System
          </h1>
          <div className="col">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default LockScreen;
