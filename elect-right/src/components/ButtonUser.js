import React, { useState } from 'react';


const ButtonUser = ({user}) => {
    return (
        <div>
            <button>
                <col></col>
                <col>{user.name}</col>
            </button>
        </div>
    );
}

export default ButtonUser;