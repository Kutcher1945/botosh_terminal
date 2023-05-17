import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PaymentMethodPage from './PaymentMethodPage';
import ZoomDisable from './ZoomDisable';
import { Helmet } from 'react-helmet';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>
        <ZoomDisable />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
      </div>
    </Router>
  );
}
