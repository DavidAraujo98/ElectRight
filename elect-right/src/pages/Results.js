import Graphic from "../components/Graphic";
import React from "react";
import {useState, useEffect} from "react";
// import UserToast from "../components/UserToast";
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

    });

    const [proposals, setProposals] = useState(election.proposals);
    let prop = election.proposals;


    const handleClick = (type = 'all', id = null) => {
        if (type === 'all')
            setProposals(election.proposals);
        else if ((type === 'proposal') && (id !== null))
            setProposals(election.proposals.filter(prop => prop.id === id));
        else console.log('Something is not right!');
    }

        let navigate = useNavigate();
    /*     const routeChange = (userid) =>{
            let path = '/profile?=' + userid;
            navigate(path);
        }


       function nVotes(id= 0){
            let temp = []
            voters.users.forEach((voter) => temp.push(voter.votes.filter((vote) => vote.id === id)));
            temp = temp.filter(result => result.length !== 0);
            return temp.length;
        }
    */

    let voters = election.voters.filter(voter => (voter.votes !== undefined));

    return (
        <div className="results">
            <div className='m-auto p-3' align='left'>
                <h1 className='my-2 fs-1'>{election.title}</h1>
                <h3>Session:{election.id}</h3>
            </div>
            <h2 >Results</h2>
            <div class='col-6'>
                <table className="table">
                    <tr>
                        <th className="btn btn-default" onClick={() => handleClick( 'all')}>All</th>
                        {prop.map((proposal) => (
                            <th className='btn' onClick={() => handleClick("proposal", proposal.id)}>{proposal.title}</th>
                        ))}
                    </tr>
                </table>
            </div>

            {proposals.map((proposal) => (
                <div>
            <Container  class='row-6 rounded-4 ms-sm-5 m-auto p-3'>
                <Row>
                     <div>
                            <div>
                                <h4>{proposal.title}</h4>
                                <Graphic users={voters} idProp={proposal.id}/>
                            </div>
                     </div>
                        {/*</Col>
                    <Col className="text-sm-start mb-2">
                        <div>
                            <Row>
                                <Col>
                                    <h2>Votes</h2>
                                </Col>
                                <Col>
                                    <h2>Número de votos: {}</h2>
                                </Col>
                            </Row>

                        {voters.map((user) => ( user.votes.filter((voter)=> voter.id === proposal.id).map(()=>
                            <UserToast user={user} addUser={routeChange} />
                        )))}
                        </div> */}
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