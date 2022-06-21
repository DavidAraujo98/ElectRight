import React from 'react';
import {useState, useEffect} from "react";
import {cloneDeep} from 'lodash';

const Profile = () => {

    var profile_url = "http://localhost:5000/profile/";
    const [userData, setUser] = useState([]);

    useEffect(() => {
        fetch(profile_url + localStorage.getItem('ProfileId')).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.image === []){
                data.image = 'https://www.clipartmax.com/png/middle/364-3643767_about-brent-kovacs-user-profile-placeholder.png';
            }
            setUser(data);
            console.log(data.image)
        })
    }, []);

    return (
        <div>
            <div>{userData.image}</div>
            <div>{userData.name}</div>

        </div>
    );
}

export default Profile;