import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KaspiImage from './Kaspi.png';
import HalykImage from './Halyk.png';

function PaymentMethodPage() {
  const navigate = useNavigate();
  const [isKaspiActive, setIsKaspiActive] = useState(false);
  const [isHalykActive, setIsHalykActive] = useState(false);

  function handleKaspiClick() {
    setIsKaspiActive(true);
    setTimeout(() => {
      navigate('/');
    }, 20000);
  }

  function handleHalykClick() {
    setIsHalykActive(true);
    setTimeout(() => {
      navigate('/');
    }, 20000);
  }

  function handleKaspiClose() {
    setIsKaspiActive(false);
  }

  function handleHalykClose() {
    setIsHalykActive(false);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="PaymentMethodPage">
      <div className="header">
        <h1 className="title">Выберите способ оплаты</h1>
        <Link to="/" className="back-button">Назад</Link>
      </div>
      <div className="paymentMethodButtons">
        <button className="button" onClick={handleKaspiClick}>Kaspi QR</button>
        <button className="button" onClick={handleHalykClick}>Halyk QR</button>
      </div>
      <div className={`overlay ${isKaspiActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Благотворительные пожертвования</h2>
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={KaspiImage} alt="Kaspi Payment Method" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper vestibulum mauris, sit amet rhoncus arcu. Quisque eget
            quam sed risus ullamcorper bibendum.
          </p>
          <button className="close-button" onClick={handleKaspiClose}>
            Close
          </button>
        </div>
      </div>
      <div className={`overlay ${isHalykActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Благотворительные пожертвования</h2>
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={HalykImage} alt="Halyk Bank Payment Method" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper vestibulum mauris, sit amet rhoncus arcu. Quisque eget
            quam sed risus ullamcorper bibendum.
          </p>
          <button className="close-button" onClick={handleHalykClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodPage;
