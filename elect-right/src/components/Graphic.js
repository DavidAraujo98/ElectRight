import React from 'react';
import {Doughnut} from 'react-chartjs-2'; // npm install react-chartjs-2


const Graphic = ({users}) => {
    const data = {
        labels: ['Accept', 'Declined'],
        datasets: [
            {
                label: 'Progress',
                animationEnabled: true,
                title: {
                    text: "Customer Satisfaction"
                },
                data: [300 , 400],
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
        <dic>

            <Doughnut data={data}/>

        </dic>
    );
}

export default Graphic;