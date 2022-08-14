import React from "react";
import "./categories.css";

function Categories() {
  return (
    <div className="my-4">
      <div className="container">
        <h2>All Categories</h2>
        <div className="row">
          <div className="col-lg-4 my-2 col-12">
            <div className="card ps-3 ">
              {/* <button className="btn-category bg-white d-flex justify-content-between align-items-center">
                <h3>All Womens</h3>
                <img></img>
              </button> */}
              <div className="bg-white d-flex justify-content-between align-items-center">
                <h4>All Womens</h4>
                <img src="images/category.png" alt="Loading" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-2 col-12">
            <div className="card ps-3 ">
              {/* <button className="btn-category bg-white d-flex justify-content-between align-items-center">
                <h3>All Womens</h3>
                <img></img>
              </button> */}
              <div className="bg-white d-flex justify-content-between align-items-center">
                <h4>New Collections</h4>
                <img src="images/category.png" alt="Loading" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-2 col-12">
            <div className="card ps-3 ">
              {/* <button className="btn-category bg-white d-flex justify-content-between align-items-center">
                <h3>All Womens</h3>
                <img></img>
              </button> */}
              <div className="bg-white d-flex justify-content-between align-items-center">
                <h4>Active / Sports</h4>
                <img src="images/category.png" alt="Loading" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-2 col-12">
            <div className="card ps-3 ">
              {/* <button className="btn-category bg-white d-flex justify-content-between align-items-center">
                <h3>All Womens</h3>
                <img></img>
              </button> */}
              <div className="bg-white d-flex justify-content-between align-items-center">
                <h4>Luxury</h4>
                <img src="images/category.png" alt="Loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
