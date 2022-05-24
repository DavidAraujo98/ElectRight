import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
function LoginLayout() {

    const history = useHistory();

    const routeChange = () => {
        let path = `newPath`;
        history.push(path);
    }
}
const ButtonUser = ({user}) => {
    return (
        <div>
            <button className={'select-user ${user.vote}'} onClick={GoToProfile}>
                {user.name}
            </button>
        </div>
    );
}

export default ButtonUser;