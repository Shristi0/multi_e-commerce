import React from "react";
import "./checkout.css";

function Checkout() {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row">
          <div>
            <div className="my-3 checkout-total  p-3">
              <div className="d-flex justify-content-between ">
                <h5 style={{ color: "#4E5471", fontWeight: "500" }}>3 Items</h5>
                <h5 style={{ color: "#E29547" }}>
                  Total Price:{" "}
                  <span style={{ fontWeight: "600" }}> 20000/-</span>
                </h5>
              </div>
            </div>
            <div className="col-lg-12 my-3 ">
              <h3>My Shopping Bag</h3>
              <div className="row">
                <div className="col-lg-6">
                  <div className="checkout-mainContent d-flex mt-5 pb-2">
                    <div className="checkout-image">
                      <img src="images/category.png" />
                    </div>
                    <div className="checkout-Content ms-3">
                      <div className="d-flex justify-content-between">
                        <p className="checkout-p">Jan Sflanaganvik sofa</p>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75ZM9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.69998C8.35 9.40998 8.35 8.92999 8.64 8.63999C8.93 8.34999 9.41 8.34999 9.7 8.63999L12 10.94L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L13.06 12L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.56 15.51 9.36 15.58 9.17 15.58Z"
                            fill="#E29547"
                          />
                        </svg>
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <p
                          className="checkout-p m-0"
                          style={{ color: "#AAAAAA" }}
                        >
                          Qty: 1
                        </p>
                        <div className="d-flex gap-3 align-items-center mt-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15C1.25 20.43 3.57 22.75 9 22.75ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM8 12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75Z"
                              fill="#E29547"
                            />
                          </svg>
                          <p
                            className="checkout-p m-0"
                            style={{ color: "#AAAAAA" }}
                          >
                            1
                          </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.25 15C1.25 20.43 3.57 22.75 9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75Z"
                              fill="#E29547"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="d-flex gap-3 mt-3">
                        <h5
                          className="checkout-h5"
                          style={{ color: "#E29547", fontSize: "18px" }}
                        >
                          $500
                        </h5>
                        <p style={{ color: "#646464" }}>You saved $100 </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="checkout-mainContent d-flex mt-5 pb-2">
                    <div className="checkout-image">
                      <img src="images/category.png" />
                    </div>
                    <div className="checkout-Content ms-3">
                      <div className="d-flex justify-content-between">
                        <p className="checkout-p">Sverom chair</p>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75ZM9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.69998C8.35 9.40998 8.35 8.92999 8.64 8.63999C8.93 8.34999 9.41 8.34999 9.7 8.63999L12 10.94L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L13.06 12L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.56 15.51 9.36 15.58 9.17 15.58Z"
                            fill="#E29547"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="checkout-p m-0"
                          style={{ color: "#AAAAAA" }}
                        >
                          Qty: 1
                        </p>
                      </div>
                      <div className="d-flex justify-content-between gap-3 my-2">
                        <div className="d-flex gap-3 align-items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15C1.25 20.43 3.57 22.75 9 22.75ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM8 12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75Z"
                              fill="#E29547"
                            />
                          </svg>
                          <p
                            className="checkout-p m-0"
                            style={{ color: "#AAAAAA" }}
                          >
                            1
                          </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.25 15C1.25 20.43 3.57 22.75 9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75Z"
                              fill="#E29547"
                            />
                          </svg>
                        </div>
                        <h5
                          className="checkout-h5"
                          style={{ color: "#E29547", fontSize: "18px" }}
                        >
                          $500
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="checkout-mainContent d-flex mt-5 pb-2">
                    <div className="checkout-image">
                      <img src="images/category.png" />
                    </div>
                    <div className="checkout-Content ms-3">
                      <div className="d-flex justify-content-between">
                        <p className="checkout-p">Kallax chair</p>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75ZM9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.69998C8.35 9.40998 8.35 8.92999 8.64 8.63999C8.93 8.34999 9.41 8.34999 9.7 8.63999L12 10.94L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L13.06 12L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.56 15.51 9.36 15.58 9.17 15.58Z"
                            fill="#E29547"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="checkout-p m-0"
                          style={{ color: "#AAAAAA" }}
                        >
                          Qty: 1
                        </p>
                      </div>
                      <div className="d-flex justify-content-between gap-3 my-2">
                        <div className="d-flex gap-3 align-items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15C1.25 20.43 3.57 22.75 9 22.75ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM8 12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75Z"
                              fill="#E29547"
                            />
                          </svg>
                          <p
                            className="checkout-p m-0"
                            style={{ color: "#AAAAAA" }}
                          >
                            1
                          </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.25 15C1.25 20.43 3.57 22.75 9 22.75H15C20.43 22.75 22.75 20.43 22.75 15V9C22.75 3.57 20.43 1.25 15 1.25H9C3.57 1.25 1.25 3.57 1.25 9V15ZM2.75 9C2.75 4.39 4.39 2.75 9 2.75H15C19.61 2.75 21.25 4.39 21.25 9V15C21.25 19.61 19.61 21.25 15 21.25H9C4.39 21.25 2.75 19.61 2.75 15V9ZM12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75Z"
                              fill="#E29547"
                            />
                          </svg>
                        </div>
                        <h5
                          className="checkout-h5"
                          style={{ color: "#E29547", fontSize: "18px" }}
                        >
                          $500
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-coupon d-flex justify-content-between gap-4 mb-5">
              <input
                className="checkout-input rounded"
                placeholder="Insert your coupon code"
              />
              <button className="checkout-button btn-lg rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
