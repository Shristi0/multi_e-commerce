import React from "react";

function Footer1() {
  return (
    <div>
      <div className="container bg-white py-3">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div>
              <h5
                className="m-0"
                style={{ color: "#AAAAAA", fontWeight: "400" }}
              >
                You Saved
              </h5>
              <h4
                className="mt-1 "
                style={{ color: "#E29547", fontWeight: "600" }}
              >
                Rs. 6000
              </h4>
            </div>
            <button
              className="btn btn-lg "
              style={{
                color: "white",
                backgroundColor: "#FFB800",
                borderRadius: "8px",
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer1;
