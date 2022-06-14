import React, {useState} from 'react';
import { Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);
const Graphic = (props) => {

    function percVotes(value){
        let nVotes = []
        props.users.forEach((voter) => nVotes.push(voter.votes.filter((vote) => vote.id === props.idProp)));
        nVotes = nVotes.filter(result => result.length !== 0)

        let nVotesTrue = []
        props.users.forEach((voter) => nVotesTrue.push(voter.votes.filter(vote => (vote.id === props.idProp && vote.value === value))));
        nVotesTrue = nVotesTrue.filter(result => result.length !== 0)
        return nVotesTrue.length*100/nVotes.length;
    }

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
                data: [percVotes(1), percVotes(-1), percVotes(0)],
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
            <Doughnut data={data} options={{
                legend: { display: true, position: "right" },

                datalabels: {
                    display: true,
                    color:  'rgb(9,9,8)',
                },
                tooltips: {
                    backgroundColor: "#5a6e7f",
                },
            }}/>
            <h2 class='display-Perc'>Percentage Accept: {Math.round(percVotes(1))} %</h2>
        </div>
    );
}

export default Graphic;
