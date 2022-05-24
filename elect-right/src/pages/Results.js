import Graphic from "../components/Graphic";
import React from "@types/react";
import ButtonUser from "../components/ButtonUser";

const Results = ({elect, users}) => {
    return (
        <div className="results">
            <div>
                <h2>{elect.name}</h2>
                <h3>Session:{elect.code}</h3>
            </div>
            <div>
                <col>
                    <h4>Results</h4>
                    <Graphic elect={elect} users={users}/>
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