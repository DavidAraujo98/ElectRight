import './css/App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Ballot from './pages/Ballot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from "./pages/Results";

function App() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Editor", path: "/editor" },
    { name: "Profile", path: "/profile" }
  ]

  return (
    <Router>
      <div className="App">
        <Navbar username="John Doe" img_src='./assets/user-solid.svg' links={links} />
        <div className="Content">
          <Routes>
            {/*
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/results" element={<Results />} />
            */}
            <Route path="/editor" element={<Editor/>} />
            <Route path="/" element={<Home email={ 'joeDoe@gmail.com'}/>} />
            <Route path="/results" element={<Results />} />
            <Route path="/ballot" element={<Ballot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
