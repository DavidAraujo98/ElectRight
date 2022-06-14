import React, {useState} from 'react';
import { Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import {Col, Row} from "react-bootstrap";
import UserToast from "./UserToast";
import {useNavigate} from "react-router-dom";


Chart.register(ArcElement, Tooltip, Legend);
const Graphic = (props) => {

    function numVotes(value){
        let nVotesTrue = []
        props.users.forEach((voter) => nVotesTrue.push(voter.votes.filter(vote => (vote.id === props.idProp && vote.value === value))));
        nVotesTrue = nVotesTrue.filter(result => result.length !== 0)
        return nVotesTrue.length;
    }

    let navigate = useNavigate();
    const routeChange = (userid) =>{
        let path = '/profile?=' + userid;
        navigate(path);
    }

    let nVotes = []
    props.users.forEach((voter) => nVotes.push(voter.votes.filter((vote) => vote.id === props.idProp)));
    nVotes = nVotes.filter(result => result.length !== 0)

    const data = {
        id: 160,
        labels: ['Accept', 'Declined', 'Abstention'],
        datasets: [
            {
                label: 'Progress',
                animationEnabled: true,
                title: {
                    text: "Customer Satisfaction"
                },
                data: [numVotes(1), numVotes(-1), numVotes(0)],
                backgroundColor: [
                    'rgb(0,144,172)',
                    'rgb(233,29,99)',
                    'rgb(255,205,3)'
                ],
                hoverOffset: 4
            },
        ],

    };

    return (
        <div>
            <Row>
                <Col className="text-sm-start mb-2">
                    <div class='col-10 rounded-4 ms-sm-5 m-auto p-3'>
                        <div>
                            <Doughnut data={data} />
                            <h2>Percentage Accept: {Math.round(numVotes(1)*100/nVotes.length)} %</h2>
                        </div>
                    </div>
                </Col>
                <Col className="text-sm-start mb-2">
                    <div>
                        <Row>
                            <Col>
                                <h2>Votes</h2>
                            </Col>
                            <Col>
                                <h2>Número de votos: {nVotes.length}</h2>
                            </Col>
                        </Row>

                        {props.users.map((user) => ( user.votes.filter((voter)=> voter.id === props.idProp).map(()=>
                            <UserToast user={user} addUser={routeChange} />
                        )))}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Graphic;
