import Graphic from "../components/Graphic";
import React from "@types/react";
import ButtonUser from "../components/ButtonUser";
import {BrowserRouter as useParams} from "react-router-dom";

const Results = () => {
    
    const {code, name} = useParams();

    return (
        <div className="results">
            <div>
                <h2>{name}</h2>
                <h3>Session:{code}</h3>
            </div>
            <div>
                <col>
                    <h4>Results</h4>
                    <Graphic elect={code}/>
                </col>
                <col>
                    <h4>Votes</h4>
                    {users.map((user) => (
                        <ButtonUser user={user} />
                    ))}
                </col>
            </div>
        </div>

    );
}

export default Results;