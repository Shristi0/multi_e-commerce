import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <ProductCard />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ProductList