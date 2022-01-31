import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/adduser" element={<AddUser></AddUser>} />
          <Route path="/edituser/:id" element={<EditUser></EditUser>} />
        </Routes>
      </div>
  );
}

export default App;
