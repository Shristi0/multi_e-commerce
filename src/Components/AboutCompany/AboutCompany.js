import React from "react";

function AboutCompany(){
    return(
        <div className="my-3">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="images/Banner.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-6 bg-white d-flex flex-column justify-content-between">
                        <div className="p-2" >
                            <h2 className="">We are Distributers</h2>
                            <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </span>
                        </div>
                            <div className="d-flex justify-content-end align-items-center gap-2 p-2">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany