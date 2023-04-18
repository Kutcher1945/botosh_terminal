import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PaymentMethodPage from './PaymentMethodPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
