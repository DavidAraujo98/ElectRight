import SelectElect from "../components/SelectElect.js";
import Carousel from 'react-bootstrap/Carousel'; // npm install react-bootstrap
import "../css/Home.css";
import React, { useState } from 'react';

const Home = ({email}) => {
    const [elects] = useState([
        {id:1, 'name':'Plan for social housing', 'data':'10-01-22', 'votes':30, 'code':'A2FG5J', 'type':'Public', 'president':'angasf@gmail.com', 'secretary':'joeDoe@gmail.com', 'voters':['jane@gmail.com','jim@gmail.com','hight@gmail.com']},
        {id:2,'name':'Water piping maintance', 'data':'10-01-22', 'votes':30, 'code':'A3FG5J', 'type':'Secret','president':'jane@gmail.com', 'secretary':'jim@gmail.com', 'voters':['joeDoe@gmail.com','','angasf@gmail.com']},
        {id:3,'name':'Rebuilding project for primary school', 'data':'10-01-22', 'votes':30, 'code':'GT68HG', 'type':'Public','president':'joeDoe@gmail.com', 'secretary':'hight@gmail.com', 'voters':['jim@gmail.com','','jane@gmail.com']},
        {id:4,'name':'Something', 'data':'10-01-22', 'votes':30, 'code':'1111AAAA', 'type':'Secret','president':'jane@gmail.com', 'secretary':'hight@gmail.com', 'voters':['hight@gmail.com','jim@gmail.com','angasf@gmail.com']},
        {id:5,'name':'Something 2', 'data':'10-01-22', 'votes':30, 'code':'FDDWF231', 'type':'Public','president':'jim@gmail.com', 'secretary':'jane@gmail.com', 'voters':['angasf@gmail.com','','']}
    ]);

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
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="selectElect">
                <SelectElect email={email} />
            </div>
        </div>
    );
}

export default Home;