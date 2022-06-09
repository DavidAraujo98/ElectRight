import Graphic from "../components/Graphic";
import React from "react";
import {useState} from "react";
import UserToast from "../components/UserToast";
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Results = () => { // elect

    const [elect] = useState(
        {
            "id": 'AS23D1',
            'title': "Children's Play PArk Project",
            'startDate': '2022-06-07T00:45',
            'endDate': '2022-06-07T00:50',
            'proposals': [{'id': "AS23D2", 'title': 'New swings', "old_": 'new', 'new_': 'new new', 'images': []}],
            'voters': [{"id": 1233241, "name": "Leonardo"}, {"id": 6367756, "name": "Carolina"}, {
                "id": 9490184, "name": "Otávio", "votes": [{
                    "id": "AS23D2", "value": true
                }]
            }, {"id": 1233241, "name": "Urtélia", "votes": [{"id": "AS23D2", "value": false}]}]
        }
    );

    let navigate = useNavigate();
    const routeChange = (userid) =>{
        let path = '/profile?=' + userid;
        navigate(path);
    }


    const [voters] = useState(elect.voters.filter(voter => (voter.votes !== undefined)));
    const [proposals] = useState(elect.proposals);


    return (
        <div className="results">
            <div align='left'>
                <h2>{elect.title}</h2>
                <h3>Session:{elect.id}</h3>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4>Results</h4>
                        {proposals.map((proposal) => (
                            <div>
                                <h4>{proposal.title}</h4>
                                <Graphic users={voters} idProp={proposal.id}/>
                            </div>
                        ))}

                    </Col>
                    <Col>
                        <h4>Votes</h4>
                        {elect.voters.filter(voter => (voter.votes !== undefined)).map((user) => (
                            <UserToast user={user} addUser={routeChange}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Results;