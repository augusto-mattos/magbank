import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Institutional from './components/Institutional';
import "./App.scss";

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Institutional />
    </div>
);

export default App;
