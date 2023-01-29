import React from "react";
import CreateProduct from "../CreateProduct/CreateProduct";

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <h3>Message</h3>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Message Me
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div>
                <CreateProduct />
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="Submit" className="btn btn-primary">
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
