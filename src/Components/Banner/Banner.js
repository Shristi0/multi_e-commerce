import React from "react";
import Slider from "react-slick";
import "./banner.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section>
            <div className="container my-3">
                <Slider {...settings}>
                    <div>
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>

                </Slider>
            </div>
        </section>
    );
}

export default Banner