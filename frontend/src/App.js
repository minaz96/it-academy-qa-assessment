import React, { useEffect } from 'react';
import "./App.css"

import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';

let token = localStorage.getItem("token")

export const App = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    if(token){
      navigate('/');
    }else{
      navigate('/login');
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/profile" element={<Profile/>}/> */}
      </Routes>
    </>
  );
};

export default App;