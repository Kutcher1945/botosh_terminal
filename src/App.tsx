import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PaymentMethodPage from './PaymentMethodPage';
import ZoomDisable from './ZoomDisable';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className="App">
        <ZoomDisable />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
      </div>
    </Router>
  );
}
