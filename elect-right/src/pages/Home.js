import SelectElect from "../components/SelectElect.js";
import PrevElect from "../components/PrevElect";
import "../css/Home.css"
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
            <div className="selectElect">
                <SelectElect email={email} />
            </div>
            <div className="prevElect" >
                <PrevElect electsori={elects} email={email}/>
            </div>
        </div>
    );
}

export default Home;