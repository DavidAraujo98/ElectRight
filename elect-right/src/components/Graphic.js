import React from 'react';
import {Doughnut} from 'react-chartjs-2'; // npm install react-chartjs-2


const Graphic = ({users, idProp}) => {

    const nVotesTrue = users.votes.filter(voter => (voter.id === idProp && voter.value === true)).length;
    const nVotesFalse = users.votes.filter(voter => (voter.id === idProp && voter.value === false)).length;
    const nVotes = users.length;
    console.log(nVotesTrue*100/nVotes);

    {/* const data = {
        labels: ['Accept', 'Declined'],
        datasets: [
            {
                label: 'Progress',
                animationEnabled: true,
                title: {
                    text: "Customer Satisfaction"
                },
                data: [(nVotesTrue*100/nVotes) , (nVotesFalse*100/nVotes)],
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
    }; */}

    return (
        <dic>
            {/*     <Doughnut data={data}/> */}
        </dic>
    );
}

export default Graphic;