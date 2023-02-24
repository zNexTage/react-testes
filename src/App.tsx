import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuration from './pages/configuration/configuration';
import Raffle from './pages/raffle/raffle';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
          <Routes>
            <Route path="/" element={<Configuration />} />
            <Route path="/sorteio" element={<Raffle />} />
          </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
