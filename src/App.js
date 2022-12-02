import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import './App.scss';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AccountBalance from './components/AccountBalance';
import AccountPayments from './components/AccountPayments';
import AccountHistory from './components/AccountHistory';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const data = {
    latestBalance: [
      {date: '22/07', description: 'Supermercado 4516', value: '252,78'},
      {date: '21/07', description: 'Saque 24h', value: '300,00'},
      {date: '21/07', description: 'Estacionamento', value: '13,00'},
      {date: '20/07', description: 'Aluguel', value: '1250.00,00'},
      {date: '18/07', description: 'BarBar', value: '67,40'},
    ],
    futureBalance: [
      {date: '25/07', description: 'Spotify', value: '30,00'},
      {date: '30/07', description: 'Netflix', value: '19,90'},
      {date: '05/08', description: 'Gym', value: '59,00'},
      {date: '05/08', description: 'Decathlon 2/4', value: '123,25'},
    ],
    history: [
      {date: '17/07', description: 'S24h CHU', value:'200,00-'},
      {date: '17/07', description: 'Saldo do dia', balance:'2780,00'},
      {date: '18/07', description: 'Bar do João', value:'58,00-'},
      {date: '18/07', description: 'Restô donté', value:'125,00-'},
      {date: '18/07', description: 'Saldo do dia', balance:'2597,00'},
      {date: '20/07', description: 'Vélo', value:'30,00-'},
      {date: '20/07', description: 'Saldo do dia', balance:'2567,00'},
      {date: '21/07', description: 'Café', value:'1,40-'},
      {date: '21/07', description: 'Saldo do dia', balance:'2596,60'},
    ],
  };

  return ( 
    <Router>
      <Navbar handleCreateAccount={() => setShowModal(true)} />

      <Routes> 
        <Route path='/' element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='dashboard/balance' element={<AccountBalance data={data} />} />
          <Route path='/dashboard/payments' element={<AccountPayments />} />
          <Route path='/dashboard/history' element={<AccountHistory data={data} />} />
        </Route>
      </Routes>

      <Footer />

      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
    );
};

export default App;
