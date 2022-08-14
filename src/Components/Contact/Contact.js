import React from "react";
import "./contact.css";
import Payment from "../Payment/Payment";

function Contact() {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="my-3">
              <h3>Contact Information</h3>
              <div className="row ">
                <div className="col-lg-6 mt-3">
                  <div className="input-group input-group-lg">
                    <span
                      className="input-group-text bg-white"
                      id="inputGroup-sizing-lg"
                    >
                      +977
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-3  ">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3">
              <h4>Shipping Information</h4>
              <div className="row ">
                <div className="col-lg-6 col-12 mt-3">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3  ">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country/Region"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3  ">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment/ Suit (Optional)"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3  ">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <input type={"checkbox"} />
              <label className="ps-2">
                Save this information for next purchase
              </label>
            </div>
            {/* Save this information for next purchase */}
            {/* </input> */}
          </div>
          <div className="col-lg-4">
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
