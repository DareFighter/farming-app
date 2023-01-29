import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  <h1 style={{ fontSize: "1.4em" }}>SearchProduct</h1>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  <h1 style={{ fontSize: "1.4em" }}>Orders</h1>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  <h1 style={{ fontSize: "1.4em" }}></h1>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
