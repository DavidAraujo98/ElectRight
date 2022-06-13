import Graphic from "../components/Graphic";
import React from "react";
import {useState, useEffect} from "react";
import UserToast from "../components/UserToast";
import {Button, Col, Container, Row} from "react-bootstrap";
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
    var election_url = "http://localhost:5000/election/";
    var profile_url = "http://localhost:5000/profile/";

    useEffect(() => {
        var idb = new URLSearchParams(window.location.search).get("idb");
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

    let proposals = election.proposals;

    let handleClick = (e, type , id = null) => {
        if (type === 'all')
            proposals = election.proposals;
        else if ((type === 'proposal') && (id !== null))
            proposals = election.proposals.filter(prop => prop.id === id);
        else console.log('Something is not right!');


    }

    let navigate = useNavigate();
    const routeChange = (userid) =>{
        let path = '/profile?=' + userid;
        navigate(path);
    }


    let voters = election.voters.filter(voter => (voter.votes !== undefined));

    console.log(election.voters)

    return (
        <div className="results">
            <div align='left'>
                <h1 className='my-2'>{election.title}</h1>
                <h1>Session:{election.id}</h1>
            </div>
            <h2 >Results</h2>
                <Row>
                    <Col><Button onClick={(e) => handleClick(e, "all")}>All</Button></Col>
                    {proposals.map((proposal) => (

                        <Col><Button onClick={(e) => handleClick(e, "proposal", proposal.id)}>{proposal.title}</Button></Col>
                    ))}
                </Row>

            {proposals.map((proposal) => (
            <Container>
                <Row>
                    <Col className="text-sm-start mb-2">
                     <div>
                            <div>
                                <h4>{proposal.title}</h4>
                                <Graphic users={voters} idProp={proposal.id}/>
                            </div>
                     </div>
                    </Col>
                    <Col className="text-sm-start mb-2">
                        <div>
                        <h2>Votes</h2>
                        {voters.map((user) => ( user.votes.filter((voter)=> voter.id === proposal.id).map(()=>
                                <UserToast user={user} addUser={routeChange}/>
                        )))}
                        </div>
                    </Col>
                </Row>
            </Container>
            ))}
        </div>

    );
}

export default Results;