import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Form from './components/form/form';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
          <Routes>
            <Route path="/" element={<Form />} />
          </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
