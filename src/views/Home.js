import React from 'react';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';
import './Home.scss';

const Home = () => ( 
    <>
      <Hero />
      <Main />
      <Institutional />
      <Faq /> 
    </>
    );

export default Home;
