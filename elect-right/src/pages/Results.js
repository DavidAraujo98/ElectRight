import Graphic from "../components/Graphic";
import React from "react";
import {useState, useEffect} from "react";
import UserToast from "../components/UserToast";
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import '../css/Results.css';

const Results = () => { // elect

    const [personalId, setPersonalId] = useState(null);
    const [election, setElection] = useState({
        id: new Date().getTime() + 1,
        title: "",
        startDate: "",
        endDate: "",
        proposals: [],
        voters: [],
    });
    const [votes, castVote] = useState([]);
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
                setPersonalId(data.id);
                return data.id
            })
            .then((id) => {
                fetch(election_url + idb)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        var temp = data.voters.filter(
                            (item) => item.id === id
                        );
                        if (temp.length !== 1) {
                            window.location.replace("/");
                        }
                        temp = votes
                        data.proposals.forEach((proposal) => {
                            temp = temp.concat({ id: proposal.id, value: 0 });
                        })
                        castVote(temp);
                        setElection(data);
                    });
            })

    }, []);


    let navigate = useNavigate();
    const routeChange = (userid) =>{
        let path = '/profile?=' + userid;
        navigate(path);
    }


    const [voters] = useState(election.voters.filter(voter => (voter.votes !== undefined)));
    const [proposals] = useState(election.proposals);


    return (
        <div className="results">
            <div align='left'>
                <h1 className='my-2'>{election.title}</h1>
                <h1>Session:{election.id}</h1>
            </div>
            <Container>
                <Row>
                    <Col className="text-sm-start mb-2">
                        <h2 >Results</h2>
                        {proposals.map((proposal) => (
                            <div>
                                <h4>{proposal.title}</h4>
                                <Graphic users={voters} idProp={proposal.id}/>
                            </div>
                        ))}

                    </Col>
                    <Col className="text-sm-start mb-2">
                        <h2>Votes</h2>
                        {election.voters.filter(voter => (voter.votes !== undefined)).map((user) => (
                            <UserToast user={user} addUser={routeChange}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Results;