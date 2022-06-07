import React, { useState } from 'react';


const ButtonUser = ({user}) => {
    return (
        <div>
            <button class='btn btn-elect rounded-pill px-4'>
                {user.name}
            </button>
        </div>
    );
}

export default ButtonUser;