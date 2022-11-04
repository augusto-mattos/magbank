import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Institutional from './components/Institutional';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return ( 
    <div className="App">
      <Navbar handleCreateAccount={() => setShowModal(true)} />
      <Hero />
      <Main />
      <Institutional />
      <Faq /> 
      <Footer />

      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
    );
};


export default App;
