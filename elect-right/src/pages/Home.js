import Carousel from "react-bootstrap/Carousel"; // npm install react-bootstrap
import "../css/Home.css";
import React, { useState } from "react";

const Home = () => {
  const [code, setCode] = useState("");

  return (
    <div className="home">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://webassets.oxfamamerica.org/media/images/VoteVoice-web-2440x1526.width-1200.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/aplus-media/vc/a6736b2f-2cde-46a5-8eab-c44e7553f74f.__CR0,0,970,300_PT0_SX970_V1___.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://conteudo.solutudo.com.br/wp-content/uploads/2022/01/futuro-da-trabalho-cobra-CIOs.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="row mt-4 zindex-modal">
        <div className="col-6 area-pink bg-opacity-50 rounded-4 ms-sm-5 m-auto p-3">
          <div className="text-sm-start mb-2">
            <h1>Election taking place?</h1>
            <label>
              Insert the election code bellow to access the voting ballot.
            </label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              id="code"
              placeholder="Election code"
              className="form-control shadow-none pink fs-1 border border-0 rounded-pill px-4 m-auto"
            />
          </div>
          <div className="text-sm-end">
            <a
              href={"ballot?idb=" + code}
              className={
                code == ""
                  ? "btn btn-elect rounded-pill disabled"
                  : "btn btn-elect rounded-pill"
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
