import React from "react";
import "./payment.css";

function Payment() {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mb-2">
            <label className="payment-label">Total Price</label>
            <label className="payment-label">Rs. 18000</label>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <label className="payment-label">Discount (Coupon Code)</label>
            <label className="payment-label">Rs. 2000</label>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <label className="payment-label">Tax</label>
            <label className="payment-label">Rs. 200</label>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <label className="payment-label">Delivery Fee</label>
            <label className="payment-label">Rs. 150</label>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-2">
            <label className="payment-label-1">Grand Total</label>
            <label className="payment-label-1">Rs. 8350</label>
          </div>
        </div>

        <div className="my-3 payment-delivery p-3">
          <div className="d-flex justify-content-between mb-2">
            <h5 style={{ color: "#4E5471", fontWeight: "500" }}>
              Average Delivery Time
            </h5>
            <h5 style={{ color: "#E29547" }}>3 ~ 4 days</h5>
          </div>
        </div>

        <div className="my-3 payment-secured p-3">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.833252L2.5 4.16659V9.16659C2.5 13.7916 5.7 18.1166 10 19.1666C14.3 18.1166 17.5 13.7916 17.5 9.16659V4.16659L10 0.833252ZM10 9.99159H15.8333C15.3917 13.4249 13.1 16.4833 10 17.4416V9.99992H4.16667V5.24992L10 2.65825V9.99159Z"
                fill="#3BB77E"
              />
            </svg>
          </div>
          <h5 className="mb-0" style={{ color: "#3BB77E" }}>
            100% Secured Payment
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Payment;
