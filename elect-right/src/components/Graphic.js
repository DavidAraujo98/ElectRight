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

  /*  let nVotesWhite = []
    props.users.forEach((voter) => nVotesFalse.push(voter.votes.filter(vote => (vote.id === props.idProp && vote.value === undefined))));
    nVotesFalse = nVotesFalse.filter(result => result.length !== 0) */

    let nVotes = []
    props.users.forEach((voter) => nVotes.push(voter.votes.filter((vote) => vote.id === props.idProp)));
    nVotes = nVotes.filter(result => result.length !== 0)

    let PercAccept = nVotesTrue.length*100/nVotes.length;
    let PercDeclined = nVotesFalse.length*100/nVotes.length;
//    let PercWhite = nVotesWhite.length*100/nVotes.length;

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
                data: [ PercAccept, PercDeclined],
                backgroundColor: [
                    'rgb(0,144,172)',
                    'rgb(233,29,99)',
                ],
                borderColor: [
                    'rgb(0,144,172)',
                    'rgb(233,29,99)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Doughnut data={data}/>
            <h2>{PercAccept} %</h2>
        </div>
    );
}

export default Graphic;
