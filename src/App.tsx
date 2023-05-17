import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './disable-zoom.css'; // Import the CSS file
import MainPage from './MainPage';
import PaymentMethodPage from './PaymentMethodPage';
import ZoomDisable from './ZoomDisable';
import TouchZoomBlocker from './TouchZoomBlocker'; // Import the TouchZoomBlocker component
// import USBComponent from './USBComponent'; // Import the USBComponent

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <TouchZoomBlocker /> {/* Include the TouchZoomBlocker component */}
        <ZoomDisable />
        {/* <USBComponent /> Include the USBComponent */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
      </div>
    </Router>
  );
}
