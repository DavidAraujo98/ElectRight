import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import user_img from './assets/user-solid.svg';

function App() {
  return (
    <Navbar username="John Doe" img_src={user_img} />
  );
}

export default App;
