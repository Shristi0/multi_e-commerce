import React from "react";

function Title(){
    return(
        <>
        <div className="container d-flex align-items-center my-2 gap-3">
            <h2>Flash Sale</h2>
            <div className="flex-1" style={{flex: "1"}}>
                <span>
                Offer Ends in
                </span>
                <div>

                </div>
            </div>
            <a href="#" className="d-flex gap-2 align-items-center" style={{textDecoration: "none", fontSize: "18px"}}>
                <span>See all</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
            </a>
        </div>
        </>
    );
}

export default Title