import Graphic from "../components/Graphic";
import React from "react";
import {useState} from "react";
import UserToast from "../components/UserToast";

const Results = () => { // elect

    const [elect] = useState(
        {"id":'AS23D1', 'title':"Children's Play PArk Project", 'data':'10-01-22', 'voters':[{"id":1233241, "name":"Leonardo"}, {"id":6367756, "name":"Carolina"}, {"id":9490184, "name":"Otávio", "votes":[{
        "id": "AS23D2", "value": true }]}, {"id":1233241, "name":"Urtélia", "votes":[{ "id": "AS23D2", "value": false } ]}]}
        );

    const [users] = useState(elect.voters.filter(voter => (voter.votes !== undefined)));
    console.log(users.length)
    //const {code, name} = useParams();

    return (
        <div className="results">
            <div>
                <h2>{elect.title}</h2>
                <h3>Session:{elect.id}</h3>
            </div>
            <div>
                 <div>
                      <h4>Results</h4>
                     {elect.voters.filter(voter => (voter.votes !== undefined)).map((user) => (
                         <Graphic users={users} idProp={ user.votes.id } />
                     ))}
                </div>
                <div>
                    <h4>Votes</h4>
                    {elect.voters.filter(voter => (voter.votes !== undefined)).map((user) => (
                        <UserToast user={user} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Results;