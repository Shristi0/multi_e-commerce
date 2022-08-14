import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category(){
    const settings = {
        slidesToShow: 7,
        dots: false,
        speed: 300,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.2,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.2,
              dots: true,
            },
          },
        ],
      };
    return(
        <div>
            <div className="container">
            <Slider {...settings}>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    <div className="px-2">
                        <img src="images/Banner.png" style={{ width: "100%" }} />
                    </div>
                    

                </Slider>
            </div>
        </div>
    );
}

export default Category