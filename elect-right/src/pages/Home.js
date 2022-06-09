import "../css/Home.css";
import React, { useState } from "react";

const Home = () => {
    const [code, setCode] = useState("");

    return (
        <div className="home">
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner m-0">
                    <div className="carousel-item active">
                        <img
                            src={require("../assets/voting1.jpg")}
                            alt="..."
                            className="min-vw-100 vh-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require("../assets/voting2.jpg")}
                            alt="..."
                            className="min-vw-100 vh-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={require("../assets/voting3.jpg")}
                            alt="..."
                            className="min-vw-100 vh-100"
                        />
                    </div>
                </div>
            </div>
            <div id="searchcode" className="row fw-light">
                <div className="col-6 area-pink rounded-4 ms-sm-5 m-auto p-3">
                    <div className="text-sm-start mb-2">
                        <h1 className="my-2">Election taking place?</h1>
                        <h5 className="pink my-2">
                            Insert the <b>election code</b> bellow to access the
                            voting ballot.
                        </h5>
                        <input
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            type="text"
                            id="code"
                            placeholder="Election code"
                            className="form-control shadow-none pink fs-1 border border-0 rounded-pill px-4 my-2"
                        />
                    </div>
                    <div className="text-sm-end">
                        <a
                            href={"ballot?idb=" + code}
                            className={
                                code == ""
                                    ? "btn btn-elect rounded-pill px-4 disabled"
                                    : "btn btn-elect rounded-pill px-4"
                            }
                        >
                            Access
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
