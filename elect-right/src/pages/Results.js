import Graphic from "../components/Graphic";
import React from "react";
import {useState, useEffect} from "react";
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
    const [proposals, setProposals] = useState([]);

    var election_url = "http://localhost:5000/election/";
    var profile_url = "http://localhost:5000/profile/";

    useEffect(() => {
        var idb = new URLSearchParams(window.location.search).get("idb");
        fetch(election_url + idb)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        setElection(data);
                    });

    }, []);

    useEffect(() => {
        setProposals(election.proposals);
    }, [election]);


    let prop = election.proposals;


    const handleClick = (type = 'all', id = null) => {
        if (type === 'all')
            setProposals(election.proposals);
        else if ((type === 'proposal') && (id !== null))
            setProposals(election.proposals.filter(prop => prop.id === id));
        else console.log('Something is not right!');
    }

    let navigate = useNavigate();

    let voters = election.voters.filter(voter => (voter.votes !== undefined));

    return (
        <div className="results">
            <div className='m-auto p-3' align='left'>
                <h1 className='my-2 fs-1'>{election.title}</h1>
                <h3><span style={{ color: 'rgb(110,110,110)' }}>Session:</span><span className="pink">{election.id}</span></h3>
            </div>
            <h2>Results</h2>
            <div class='col-6'>
                <table className="table">
                    <tr>
                        <th className="btn btn-default" onClick={() => handleClick('all')}>All</th>
                        {prop.map((proposal) => (
                            <th className='btn'
                                onClick={() => handleClick("proposal", proposal.id)}>{proposal.title}</th>
                        ))}
                    </tr>
                </table>
            </div>

            {proposals.map((proposal) => (
                <div>
                    <Container class='row-6 rounded-4 ms-sm-5 m-auto p-3'>
                        <Row>
                            <div>
                                <div>
                                    <h4>{proposal.title}</h4>
                                    <Graphic users={voters} idProp={proposal.id}/>
                                </div>
                            </div>
                        </Row>
                    </Container>
                    <p></p>
                </div>
            ))}

            <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>

    );
}

export default Results;