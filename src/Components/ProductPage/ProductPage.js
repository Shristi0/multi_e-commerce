import React from "react";
import "./productPage.css";

function ProductPage() {
  return (
    <div className="my-3">
      <div className="container ">
        <div className="row py-3 bg-white rounded">
          <div className="col-lg-6 mb-5">
            <div>
              <div className="product-image">
                <img src="images/productMain.png" />
              </div>
              <div className="pdp-image-gallery-block">
                <div className="gallery_pdp_container">
                  <div id="gallery_pdp">
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image1.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image1.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image1.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image2.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image2.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image2.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image3.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image3.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image3.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image4.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image4.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image4.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image1.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image1.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image1.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="https://icodefy.com/Tools/iZoom/images/small/image2.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image2.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image2.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="images/small/image3.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image3.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image3.jpg"
                      />
                    </a>
                    <a
                      href="#"
                      data-image="images/small/image4.png"
                      data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image4.jpg"
                    >
                      <img
                        id=""
                        src="https://icodefy.com/Tools/iZoom/images/thumb/image4.jpg"
                      />
                    </a>
                  </div>

                  <a
                    href="#"
                    id="ui-carousel-next"
                    style="display: inline;"
                  ></a>
                  <a
                    href="#"
                    id="ui-carousel-prev"
                    style="display: inline;"
                  ></a>
                </div>

                <div className="gallery-viewer">
                  <img
                    id="zoom_10"
                    src="https://icodefy.com/Tools/iZoom/images/small/image1.png"
                    data-zoom-image="https://icodefy.com/Tools/iZoom/images/large/image1.jpg"
                    href="https://icodefy.com/Tools/iZoom/images/large/image1.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex justify-content-between">
              <div className="productPage-ratings d-flex align-items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.189 5.51714L10.2218 4.94058L8.44834 1.34527C8.39991 1.24683 8.32022 1.16714 8.22178 1.11871C7.97491 0.996832 7.67491 1.09839 7.55147 1.34527L5.77803 4.94058L1.81084 5.51714C1.70147 5.53277 1.60147 5.58433 1.52491 5.66246C1.43235 5.75759 1.38134 5.88558 1.3831 6.0183C1.38486 6.15102 1.43924 6.27762 1.53428 6.37027L4.40459 9.16871L3.72647 13.1203C3.71057 13.2122 3.72074 13.3067 3.75583 13.3932C3.79092 13.4796 3.84953 13.5545 3.92501 13.6093C4.00049 13.6641 4.08982 13.6967 4.18288 13.7033C4.27593 13.71 4.36897 13.6904 4.45147 13.6468L7.99991 11.7812L11.5483 13.6468C11.6452 13.6984 11.7577 13.7156 11.8655 13.6968C12.1374 13.65 12.3202 13.3921 12.2733 13.1203L11.5952 9.16871L14.4655 6.37027C14.5437 6.29371 14.5952 6.19371 14.6108 6.08433C14.653 5.81089 14.4624 5.55777 14.189 5.51714Z"
                    fill="#FFB800"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.189 5.51714L10.2218 4.94058L8.44834 1.34527C8.39991 1.24683 8.32022 1.16714 8.22178 1.11871C7.97491 0.996832 7.67491 1.09839 7.55147 1.34527L5.77803 4.94058L1.81084 5.51714C1.70147 5.53277 1.60147 5.58433 1.52491 5.66246C1.43235 5.75759 1.38134 5.88558 1.3831 6.0183C1.38486 6.15102 1.43924 6.27762 1.53428 6.37027L4.40459 9.16871L3.72647 13.1203C3.71057 13.2122 3.72074 13.3067 3.75583 13.3932C3.79092 13.4796 3.84953 13.5545 3.92501 13.6093C4.00049 13.6641 4.08982 13.6967 4.18288 13.7033C4.27593 13.71 4.36897 13.6904 4.45147 13.6468L7.99991 11.7812L11.5483 13.6468C11.6452 13.6984 11.7577 13.7156 11.8655 13.6968C12.1374 13.65 12.3202 13.3921 12.2733 13.1203L11.5952 9.16871L14.4655 6.37027C14.5437 6.29371 14.5952 6.19371 14.6108 6.08433C14.653 5.81089 14.4624 5.55777 14.189 5.51714Z"
                    fill="#FFB800"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.189 5.51714L10.2218 4.94058L8.44834 1.34527C8.39991 1.24683 8.32022 1.16714 8.22178 1.11871C7.97491 0.996832 7.67491 1.09839 7.55147 1.34527L5.77803 4.94058L1.81084 5.51714C1.70147 5.53277 1.60147 5.58433 1.52491 5.66246C1.43235 5.75759 1.38134 5.88558 1.3831 6.0183C1.38486 6.15102 1.43924 6.27762 1.53428 6.37027L4.40459 9.16871L3.72647 13.1203C3.71057 13.2122 3.72074 13.3067 3.75583 13.3932C3.79092 13.4796 3.84953 13.5545 3.92501 13.6093C4.00049 13.6641 4.08982 13.6967 4.18288 13.7033C4.27593 13.71 4.36897 13.6904 4.45147 13.6468L7.99991 11.7812L11.5483 13.6468C11.6452 13.6984 11.7577 13.7156 11.8655 13.6968C12.1374 13.65 12.3202 13.3921 12.2733 13.1203L11.5952 9.16871L14.4655 6.37027C14.5437 6.29371 14.5952 6.19371 14.6108 6.08433C14.653 5.81089 14.4624 5.55777 14.189 5.51714Z"
                    fill="#FFB800"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.189 5.51714L10.2218 4.94058L8.44834 1.34527C8.39991 1.24683 8.32022 1.16714 8.22178 1.11871C7.97491 0.996832 7.67491 1.09839 7.55147 1.34527L5.77803 4.94058L1.81084 5.51714C1.70147 5.53277 1.60147 5.58433 1.52491 5.66246C1.43235 5.75759 1.38134 5.88558 1.3831 6.0183C1.38486 6.15102 1.43924 6.27762 1.53428 6.37027L4.40459 9.16871L3.72647 13.1203C3.71057 13.2122 3.72074 13.3067 3.75583 13.3932C3.79092 13.4796 3.84953 13.5545 3.92501 13.6093C4.00049 13.6641 4.08982 13.6967 4.18288 13.7033C4.27593 13.71 4.36897 13.6904 4.45147 13.6468L7.99991 11.7812L11.5483 13.6468C11.6452 13.6984 11.7577 13.7156 11.8655 13.6968C12.1374 13.65 12.3202 13.3921 12.2733 13.1203L11.5952 9.16871L14.4655 6.37027C14.5437 6.29371 14.5952 6.19371 14.6108 6.08433C14.653 5.81089 14.4624 5.55777 14.189 5.51714Z"
                    fill="#FFB800"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.189 5.51714L10.2218 4.94058L8.44834 1.34527C8.39991 1.24683 8.32022 1.16714 8.22178 1.11871C7.97491 0.996832 7.67491 1.09839 7.55147 1.34527L5.77803 4.94058L1.81084 5.51714C1.70147 5.53277 1.60147 5.58433 1.52491 5.66246C1.43235 5.75759 1.38134 5.88558 1.3831 6.0183C1.38486 6.15102 1.43924 6.27762 1.53428 6.37027L4.40459 9.16871L3.72647 13.1203C3.71057 13.2122 3.72074 13.3067 3.75583 13.3932C3.79092 13.4796 3.84953 13.5545 3.92501 13.6093C4.00049 13.6641 4.08982 13.6967 4.18288 13.7033C4.27593 13.71 4.36897 13.6904 4.45147 13.6468L7.99991 11.7812L11.5483 13.6468C11.6452 13.6984 11.7577 13.7156 11.8655 13.6968C12.1374 13.65 12.3202 13.3921 12.2733 13.1203L11.5952 9.16871L14.4655 6.37027C14.5437 6.29371 14.5952 6.19371 14.6108 6.08433C14.653 5.81089 14.4624 5.55777 14.189 5.51714Z"
                    fill="#FFB800"
                  />
                </svg>
                <p
                  className="m-0 ps-2"
                  style={{ color: "#979797", fontWeight: "500" }}
                >
                  126 reviews
                </p>
              </div>
              <p
                className="m-0 "
                style={{ color: "#03A600", fontWeight: "600" }}
              >
                In Stock
              </p>
            </div>
            <div>
              <h4>
                Polo Ralph Lauren wind breaker jacket - classic style - light
                blue
              </h4>
              <div className="d-flex align-items-center gap-3">
                <h4> £80.00</h4>
                <h5 style={{ color: "#A4A4A4" }}>£200.00</h5>
              </div>
            </div>
            <div className="mt-3">
              <h5 style={{ color: "#979797" }}>Colours</h5>
              <div className="d-flex ">
                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>
                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>
                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>

                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>
                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>
                <div className="productPage-image">
                  <img src="./images/image2.png"></img>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5 style={{ color: "#979797" }}>Sizes</h5>
              <div className="d-flex gap-2 ">
                <div className="productPage-size text-center">
                  <h4 className="m-0">XXS</h4>
                </div>
                <div className="productPage-size text-center">
                  <h4 className="m-0">XS</h4>
                </div>
                <div className="productPage-size text-center">
                  <h4 className="m-0">S</h4>
                </div>
                <div className="productPage-size text-center">
                  <h4 className="m-0">M</h4>
                </div>
                <div className="productPage-size text-center">
                  <h4 className="m-0">L</h4>
                </div>
                <div className="productPage-size text-center">
                  <h4 className="m-0">XL</h4>
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex align-items-center gap-3">
              <h5 style={{ color: "#979797", marginBottom: "0px" }}>
                Choose Quantity
              </h5>
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
                <p className="checkout-p m-0" style={{ color: "#AAAAAA" }}>
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
            <div className="mt-3 checkout-total  p-3">
              <div className="d-flex justify-content-between ">
                <h5 style={{ color: "#4E5471", fontWeight: "400" }}>
                  Offer Ends in
                </h5>
                <h5 style={{ color: "#FF4C47" }}>22 : 03 : 22</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="d-flex justify-content-between">
            <button className="productPage-button btn btn-lg px-5 py-2">
              Add to bag
            </button>
            <button className="productPage-button1 btn btn-lg px-5">
              Buy Now
            </button>
          </div>
          <div className="my-4 d-flex  justify-content-between ">
            <div className="d-flex flex-column align-items-center text-center gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 15.0001C5.58333 15.0001 4.84167 15.7501 4.84167 16.6667C4.84167 17.5834 5.58333 18.3334 6.5 18.3334C7.41667 18.3334 8.16667 17.5834 8.16667 16.6667C8.16667 15.7501 7.41667 15.0001 6.5 15.0001ZM14.8333 15.0001C13.9167 15.0001 13.175 15.7501 13.175 16.6667C13.175 17.5834 13.9167 18.3334 14.8333 18.3334C15.75 18.3334 16.5 17.5834 16.5 16.6667C16.5 15.7501 15.75 15.0001 14.8333 15.0001ZM7.41667 10.8334H13.625C14.25 10.8334 14.8 10.4917 15.0833 9.97508L18.1667 4.13341L16.7083 3.33341L13.625 9.16675H7.775L4.225 1.66675H1.5V3.33341H3.16667L6.16667 9.65841L5.04167 11.6917C4.43333 12.8084 5.23333 14.1667 6.5 14.1667H16.5V12.5001H6.5L7.41667 10.8334ZM10.6667 1.66675L14 5.00008L10.6667 8.33341L9.49167 7.15841L10.8083 5.83341H7.33333V4.16675H10.8083L9.48333 2.84175L10.6667 1.66675Z"
                  fill="#E29547"
                />
              </svg>
              <h5 style={{ color: "#E29547" }}>Secured Checkout</h5>
            </div>
            <div className="d-flex flex-column align-items-center text-center gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.74531 9.23867C1.73532 9.12361 1.74936 9.00773 1.78653 8.89838C1.8237 8.78903 1.88319 8.6886 1.96124 8.60347C2.03928 8.51833 2.13417 8.45035 2.23988 8.40383C2.34559 8.35731 2.45982 8.33328 2.57531 8.33325H4.16656C4.38757 8.33325 4.59954 8.42105 4.75582 8.57733C4.9121 8.73361 4.99989 8.94557 4.99989 9.16658V17.0832C4.99989 17.3043 4.9121 17.5162 4.75582 17.6725C4.59954 17.8288 4.38757 17.9166 4.16656 17.9166H3.26406C3.05549 17.9166 2.85448 17.8385 2.70074 17.6975C2.54699 17.5566 2.45169 17.3631 2.43364 17.1553L1.74531 9.23867V9.23867ZM7.49989 8.90617C7.49989 8.55783 7.71656 8.24617 8.03114 8.09783C8.71823 7.77367 9.88864 7.12242 10.4166 6.242C11.097 5.107 11.2253 3.05658 11.2461 2.587C11.2491 2.52117 11.2474 2.45533 11.2561 2.39033C11.3691 1.57658 12.9395 2.527 13.5416 3.532C13.8686 4.077 13.9103 4.79325 13.8761 5.35283C13.8391 5.95117 13.6636 6.52908 13.4916 7.10325L13.1249 8.327H17.6486C17.7774 8.32699 17.9044 8.35682 18.0197 8.41414C18.135 8.47146 18.2354 8.55471 18.3131 8.65737C18.3908 8.76003 18.4437 8.8793 18.4676 9.00582C18.4915 9.13234 18.4857 9.26267 18.4507 9.38658L16.2132 17.3099C16.1638 17.4847 16.0587 17.6385 15.9138 17.748C15.769 17.8575 15.5923 17.9167 15.4107 17.9166H8.33323C8.11221 17.9166 7.90025 17.8288 7.74397 17.6725C7.58769 17.5162 7.49989 17.3043 7.49989 17.0832V8.90617Z"
                  stroke="#E29547"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5 style={{ color: "#E29547" }}>Satisfaction Guranteed</h5>
            </div>

            <div className="d-flex flex-column align-items-center text-center gap-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3335 9.6C9.7335 9.6 9.3335 10 9.3335 10.6C9.3335 11 9.6335 11.3 9.9335 11.4L9.6335 12.8H10.9335L10.6335 11.4C11.0335 11.3 11.2335 11 11.2335 10.6C11.3335 10 10.9335 9.6 10.3335 9.6ZM10.4335 5.3C9.7335 5.3 9.0335 5.8 9.0335 6.5V8H11.7335V6.5C11.6335 5.8 11.1335 5.3 10.4335 5.3ZM10.3335 2L3.3335 5V8C3.4335 12.4 6.2335 16.3 10.3335 17.9C14.4335 16.3 17.2335 12.4 17.3335 8V5L10.3335 2ZM14.3335 13C14.3335 13.6 13.9335 14 13.3335 14H7.3335C6.7335 14 6.3335 13.6 6.3335 13V9C6.3335 8.4 6.7335 8 7.3335 8H7.6335V6.5C7.7335 5.1 8.9335 4 10.3335 4C11.7335 4 12.9335 5.1 13.0335 6.5V8H13.3335C13.9335 8 14.3335 8.4 14.3335 9V13Z"
                  fill="#E29547"
                />
              </svg>

              <h5 style={{ color: "#E29547" }}>Privacy Preserved</h5>
            </div>
          </div>
          <div className="my-4 d-flex justify-content-between">
            <button className="btn btn-lg text-center">Product Details</button>
            <button className="btn btn-lg text-center">Reviews</button>
            <button className="btn btn-lg text-center">FAQs</button>
          </div>
          <div className="my-4 bg-white rounded py-5 px-3">
            <p style={{ color: "#626262" }}>
              Light blue jacket by Polo Ralph Lauren. Button neck with spread
              collar. Zip placket. Embroidered logo to chest and cuff Side
              pockets/ Elasticated hem.
              <br />
              Regular fit. True to size. Model wears: UK S/ EU S/ US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
