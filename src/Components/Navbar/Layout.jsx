import { Link, Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex ">
            <nav>
              <ul>
                <li>
                  <Link to="/createProduct">Product</Link>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
