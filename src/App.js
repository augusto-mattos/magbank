import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Institutional from './components/Institutional';
import Faq from './components/Faq';
import "./App.scss";

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Institutional />
      <Faq />
    </div>
);

export default App;
