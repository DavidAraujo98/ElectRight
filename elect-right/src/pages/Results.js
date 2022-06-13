import Graphic from "../components/Graphic";
import React from "react";
import {useState, useEffect} from "react";
import UserToast from "../components/UserToast";
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import '../css/Results.css';

const Results = () => { // elect

    const [election, setElection] = useState({
        id: new Date().getTime() + 1,
        title: "",
        startDate: "",
        endDate: "",
        proposals: [],
        voters: [],
    });
    const [idb, setExtension] = useState("");
    var election_url = "http://localhost:5000/election/";
    var profile_url = "http://localhost:5000/profile/";

    useEffect(() => {
        var idb = new URLSearchParams(window.location.search).get("idb");
        setExtension(idb);
        fetch(profile_url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return data.id
            })
            .then((id) => {
                fetch(election_url + idb)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        setElection(data);
                    });
            })

    }, []);

    let navigate = useNavigate();
    const routeChange = (userid) =>{
        let path = '/profile?=' + userid;
        navigate(path);
    }


    let voters = election.voters.filter(voter => (voter.votes !== undefined));
    let proposals = election.proposals;
    console.log(election.voters)

    return (
        <div className="results">
            <div align='left'>
                <h1 className='my-2'>{election.title}</h1>
                <h1>Session:{election.id}</h1>
            </div>
            <Container>
                <Row>
                    <Col className="text-sm-start mb-2">
                     <div>
                        <h2 >Results</h2>
                        {proposals.map((proposal) => (
                            <div>
                                <h4>{proposal.title}</h4>
                                <Graphic users={voters} idProp={proposal.id}/>
                            </div>
                        ))}
                     </div>
                    </Col>
                    <Col className="text-sm-start mb-2">
                        <div>
                        <h2>Votes</h2>
                        {election.voters.filter(voter => (voter.votes !== undefined)).map((user) => (
                            <UserToast user={user} addUser={routeChange}/>
                        ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Results;