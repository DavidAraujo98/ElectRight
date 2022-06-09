import React, {useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);
const Graphic = (props) => {

    let nVotesTrue = []
    props.users.forEach((voter) => nVotesTrue.push(voter.votes.filter(vote => (vote.id === props.idProp && vote.value))));
    nVotesTrue = nVotesTrue.filter(result => result.length !== 0)

    let nVotesFalse = []
    props.users.forEach((voter) => nVotesFalse.push(voter.votes.filter(vote => (vote.id === props.idProp && !vote.value))));
    nVotesFalse = nVotesFalse.filter(result => result.length !== 0)

    let nVotes = []
    props.users.forEach((voter) => nVotes.push(voter.votes.filter((vote) => vote.id === props.idProp)));
    nVotes = nVotes.filter(result => result.length !== 0)

    const data = {
        id: 160,
        labels: ['Accept', 'Declined'],
        datasets: [
            {
                label: 'Progress',
                animationEnabled: true,
                title: {
                    text: "Customer Satisfaction"
                },
                data: [(nVotesTrue.length*100/nVotes.length) , (nVotesFalse.length*100/nVotes.length)],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Doughnut data={data}/>
            <p></p>
        </div>
    );
}

export default Graphic;
