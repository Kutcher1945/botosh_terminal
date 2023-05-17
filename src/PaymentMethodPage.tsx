import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KaspiImage from './Kaspi.png';
import HalykImage from './Halyk.png';

function PaymentMethodPage() {
  const navigate = useNavigate();
  const [isKaspiActive, setIsKaspiActive] = useState(false);
  const [isHalykActive, setIsHalykActive] = useState(false);
  const [isCashActive, setIsCashActive] = useState(false);

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
  
  function handleCashClick() {
    setIsCashActive(true);
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

  function handleCashClose() {
    setIsCashActive(false);
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
        <button className="button" onClick={handleCashClick}>Наличные</button>
        <button className="button" onClick={handleHalykClick}>Halyk QR</button>
      </div>
      <div className={`overlay ${isKaspiActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Благотворительные пожертвования</h2>
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={KaspiImage} alt="Kaspi Payment Method" />
          <p>
            Благотворительный фонд "ОБФ Боташым" - Ваша помощь в добрых руках!
            Мы, Благотворительный фонд "ОБФ Боташым", 
            являемся некоммерческой организацией, 
            посвященной поддержке и помощи нуждающимся людям.
            Наша миссия - создать лучшие условия для развития 
            общества и обеспечить возможности для достойной жизни для всех.
          </p>
          <button className="close-button" onClick={handleKaspiClose}>
            Закрыть
          </button>
        </div>
      </div>
      <div className={`overlay ${isCashActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Благотворительные пожертвования</h2>
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img alt="Cash Payment Method" />
          <p>
          Благотворительный фонд "ОБФ Боташым" - Ваша помощь в добрых руках!
            Мы, Благотворительный фонд "ОБФ Боташым", 
            являемся некоммерческой организацией, 
            посвященной поддержке и помощи нуждающимся людям.
            Наша миссия - создать лучшие условия для развития 
            общества и обеспечить возможности для достойной жизни для всех.
          </p>
          <button className="close-button" onClick={handleCashClose}>
            Закрыть
          </button>
        </div>
      </div>
      <div className={`overlay ${isHalykActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Благотворительные пожертвования</h2>
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={HalykImage} alt="Halyk Bank Payment Method" />
          <p>
          Благотворительный фонд "ОБФ Боташым" - Ваша помощь в добрых руках!
            Мы, Благотворительный фонд "ОБФ Боташым", 
            являемся некоммерческой организацией, 
            посвященной поддержке и помощи нуждающимся людям.
            Наша миссия - создать лучшие условия для развития 
            общества и обеспечить возможности для достойной жизни для всех.
          </p>
          <button className="close-button" onClick={handleHalykClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodPage;
