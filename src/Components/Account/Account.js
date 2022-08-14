import React from "react";
import "./account.css";

function Account() {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <h2>Anil Kumar Panta</h2>
          <div className="col-lg-6">
            <div className=" account-content bg-white rounded p-3 my-2">
              <div className="d-flex align-items-center justify-content-between ">
                <h4> Address</h4>
                <div className="d-flex align-items-center gap-3">
                  <h6 className="m-0" style={{ color: "#E29547" }}>
                    Edit
                  </h6>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.725 6.68502L15.7242 6.68594L10.8256 11.7182C10.4586 12.0952 9.86499 12.0938 9.49969 11.7149C9.13445 11.3361 9.13585 10.7234 9.50284 10.3463L12.7918 6.96774L0.9375 6.96774C0.419719 6.96774 0 6.53448 0 6C0 5.46552 0.419719 5.03226 0.9375 5.03226L12.7917 5.03226L9.50288 1.65368C9.1359 1.27664 9.13449 0.663916 9.49974 0.285093C9.86504 -0.0938263 10.4587 -0.0951328 10.8256 0.281803L15.7242 5.31406L15.7251 5.31498C16.0922 5.69327 16.0911 6.30798 15.725 6.68502Z"
                      fill="#E29547"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2" style={{ color: "#AAAAAA" }}>
                <p className="account-input">
                  Nepal, Bagmati, Tokha, Shaibaba Chowk, 44608
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="account-content bg-white rounded p-3 my-2">
              <div className="d-flex align-items-center justify-content-between gap-3 ">
                <h4> Contact Information</h4>
                <div className="d-flex align-items-center gap-3">
                  <h6 className="m-0" style={{ color: "#E29547" }}>
                    Edit
                  </h6>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.725 6.68502L15.7242 6.68594L10.8256 11.7182C10.4586 12.0952 9.86499 12.0938 9.49969 11.7149C9.13445 11.3361 9.13585 10.7234 9.50284 10.3463L12.7918 6.96774L0.9375 6.96774C0.419719 6.96774 0 6.53448 0 6C0 5.46552 0.419719 5.03226 0.9375 5.03226L12.7917 5.03226L9.50288 1.65368C9.1359 1.27664 9.13449 0.663916 9.49974 0.285093C9.86504 -0.0938263 10.4587 -0.0951328 10.8256 0.281803L15.7242 5.31406L15.7251 5.31498C16.0922 5.69327 16.0911 6.30798 15.725 6.68502Z"
                      fill="#E29547"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2 d-flex gap-2 " style={{ color: "#AAAAAA" }}>
                <label className="account-label">Phone:</label>
                <p className="account-input mt-1">9800000225</p>
              </div>
              <div className="mt-2 d-flex gap-2 " style={{ color: "#AAAAAA" }}>
                <label className="account-label">Email:</label>
                <p className="account-input mt-1">abc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="account-content bg-white rounded p-3 my-2">
              <h4> Ordered List</h4>

              <div className="mt-3">
                <p className="account-input mt-1">Winter Jacket</p>
                <p className="account-input mt-1">Nike Shoes</p>
                <p className="account-input mt-1">Nike Shoes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="account-content bg-white rounded p-3 my-2">
              <h4> Failed to Complete Order</h4>

              <div className="d-flex flex-column gap-3 mt-3">
                <div className="d-flex align-items-center justify-content-between gap-3 ">
                  <p className="account-order mt-1">Winter Jacket</p>
                  <div className="d-flex align-items-center gap-3">
                    <h6 className="m-0" style={{ color: "#E29547" }}>
                      Completed Order
                    </h6>
                    <svg
                      style={{ marginTop: "4px" }}
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.725 6.68502L15.7242 6.68594L10.8256 11.7182C10.4586 12.0952 9.86499 12.0938 9.49969 11.7149C9.13445 11.3361 9.13585 10.7234 9.50284 10.3463L12.7918 6.96774L0.9375 6.96774C0.419719 6.96774 0 6.53448 0 6C0 5.46552 0.419719 5.03226 0.9375 5.03226L12.7917 5.03226L9.50288 1.65368C9.1359 1.27664 9.13449 0.663916 9.49974 0.285093C9.86504 -0.0938263 10.4587 -0.0951328 10.8256 0.281803L15.7242 5.31406L15.7251 5.31498C16.0922 5.69327 16.0911 6.30798 15.725 6.68502Z"
                        fill="#E29547"
                      />
                    </svg>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 ">
                  <p className="account-order mt-1">Nike Shoes</p>
                  <div className="d-flex align-items-center gap-3">
                    <h6 className="m-0" style={{ color: "#E29547" }}>
                      Completed Order
                    </h6>
                    <svg
                      style={{ marginTop: "4px" }}
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.725 6.68502L15.7242 6.68594L10.8256 11.7182C10.4586 12.0952 9.86499 12.0938 9.49969 11.7149C9.13445 11.3361 9.13585 10.7234 9.50284 10.3463L12.7918 6.96774L0.9375 6.96774C0.419719 6.96774 0 6.53448 0 6C0 5.46552 0.419719 5.03226 0.9375 5.03226L12.7917 5.03226L9.50288 1.65368C9.1359 1.27664 9.13449 0.663916 9.49974 0.285093C9.86504 -0.0938263 10.4587 -0.0951328 10.8256 0.281803L15.7242 5.31406L15.7251 5.31498C16.0922 5.69327 16.0911 6.30798 15.725 6.68502Z"
                        fill="#E29547"
                      />
                    </svg>
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
export default Account;
