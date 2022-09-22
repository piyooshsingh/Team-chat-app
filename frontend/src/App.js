import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ChatRoom from'./components/ChatRoom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import NotFound from './components/NotFound';
// import Header from './components/Header';
import {io} from 'socket.io-client';



function App() {

  const url = 'http://localhost:5000';
  const [socket, setSocket] = useState(io(url, {autoConnect: false}))

  useEffect(() => {
    socket.connect();
  }, [])
  

  return (
    <div>
  
      <BrowserRouter>
      {/* <Header /> */}
        {/* <Link className='btn btn-link' to="/home">Home</Link>
        <Link className='btn btn-outline-primary' to="/login">Login</Link> */}
        <Routes>
            <Route element={<Login/>} path="/" /> 
          {/* <Route element={<Home></Home>} path="home" />   */}
            <Route element={<Login></Login>} path="login" />
            <Route element={<Signup></Signup>} path="Signup" />
            <Route element={<ChatRoom></ChatRoom>} path="ChatRoom"/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;