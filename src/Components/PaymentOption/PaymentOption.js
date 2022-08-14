import React from "react";
import "./paymentOption.css";

function PaymentOption() {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-3">
              <h3>Choose Payment Options</h3>
              <div className="row ">
                <div className="col-lg-6 mt-3 d-flex  gap-4 ">
                  <div className=" d-flex align-items-center ">
                    <input type={"checkbox"} />
                    <label className="ps-3">Cash On Delivery</label>
                  </div>
                  <div className=" d-flex align-items-center">
                    <input type={"checkbox"} />
                    <label className="ps-3">Credit Card</label>
                  </div>
                </div>
                <div className="col-lg-6 mt-3  ">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Holder Name"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4 mt-4">
                  <div className="payment-image">
                    <img src="images/Master-Card.png" alt="loading" />
                  </div>
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="input-group-1 input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3">
              <h5>Expiration Date</h5>
              <div className="row">
                <div className="col-lg-12 mt-3 d-flex gap-4 ">
                  <div className="col-lg-6">
                    <div className="input-group input-group-lg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Month"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group input-group-lg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3">
              <h5>Pay Using</h5>
              <div className="row">
                <div className="col-lg-12 mt-3 d-flex gap-4 ">
                  <div className="col-lg-6 payment-method d-flex justify-content-center align-items-center">
                    <img src="images/eSewa.png" />
                  </div>
                  <div className="col-lg-6 payment-method d-flex justify-content-center align-items-center">
                    <img src="images/paypal.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentOption;
