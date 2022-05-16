import React from 'react';

const Title = ({ size }) => {

    const title = {
        fontSize: size,
    };

    return (
        <div>
            <h1 style={title}><span class="green">Elect</span><span class="pink">Right</span></ h1>
        </div>
    );
}
 
export default Title;