import "./css/App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Ballot from "./pages/Ballot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./pages/Results";
import {useEffect, useState} from "react";
// import MyProfile from "./pages/MyProfile";

function App() {
    const links = [
        { name: "Home", path: "/" },
        { name: "New Election", path: "/editor" },
        { name: "Profile", path: "/myprofile" },
    ];
    var hi = "123423452345";

    const [userData, setUser] = useState([]);
    const [idp, setExtensionProfile] = useState("");
    var profile_url = "http://localhost:5000/profile/";
    var image_url = "http://localhost:5000/static/";

    useEffect(() => {
        var idp = hi;
        setExtensionProfile(idp)
        fetch(profile_url + idp).then((res) => {
            return res.json()
        }).then((data) => {
            setUser(data);
            localStorage.setItem('ProfileId',data.id);
        })
    }, []);

    return (
        <div>
            <Router>
            <div className="App">
                <Navbar
                    username={userData.name}
                    img_src={userData.image}
                    links={links}
                />
                <div className="Content">
                    <Routes>
                        {/*
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/results" element={<Results />} />
            */}
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/ballot" element={<Ballot />} />
                        {/* <Route path="/myprofile"  element={<MyProfile />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
        </div>
    );
}

export default App;
