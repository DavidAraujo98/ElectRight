import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Editor from './pages/Editor';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar username="John Doe" img_src='./assets/user-solid.svg' />
        <div className="Content">
          <Routes>
            {/*
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            */}
            <Route path="/editor" element={<Editor/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
