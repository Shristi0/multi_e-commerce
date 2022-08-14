import React from "react";

function Testimonial(){
    return(
        <div className="my-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-12">
                        <div className="bg-white p-3">
                            <div className="d-flex mb-2">
                                <img src="images/Banner.png" style={{width: "80px", height: "80px", objectFit: "cover"}}/>
                                <div className="d-flex justify-content-end" style={{flex: "1"}}>
                                    sdfsd
                                </div>
                            </div>
                            <h5>Anil K. Pnata</h5>
                            <p className="text-secondary mb-0">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet Amet minim mollit non deserunt ullamco.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial