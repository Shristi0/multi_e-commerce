import React from "react";
import "./productCard.css"

function ProductCard() {
    return (
        <div className="">
            <div className="mx-3">
            <img src="images/product.png" className=" rounded-3 product-image" />
            </div>
            <div className="bg-white pt-5 px-3 rounded">
                <h4 className="mt-5">Sverom chair</h4>
                <h3>$400</h3>
                <div>
                    <span className="me-2">$800</span>
                    <span className="text-success">Save $400</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard