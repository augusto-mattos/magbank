import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return ( 
    <Router>
      <Navbar handleCreateAccount={() => setShowModal(true)} />

      <Routes> 
        <Route path='/' element={<Home handleClick={() => setShowModal(true)} />} 
        />
        <Route path='/login' element={<h2>Hello Router</h2>} 
        />
      </Routes>

      <Footer />

      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
    );
};

export default App;
