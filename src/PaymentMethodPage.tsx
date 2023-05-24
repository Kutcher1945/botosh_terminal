import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KaspiImage from './Kaspi.png';
import HalykImage from './Halyk.png';

function PaymentMethodPage() {
  const navigate = useNavigate();
  const [isKaspiActive, setIsKaspiActive] = useState(false);
  const [isHalykActive, setIsHalykActive] = useState(false);
  const [isCashActive, setIsCashActive] = useState(false);
  const pageTimerRef = useRef<number | null>(null);
  const popUpTimerRef = useRef<number | null>(null);

  useEffect(() => {
    startPageTimer();
    return () => {
      clearTimeout(pageTimerRef.current as number);
      clearTimeout(popUpTimerRef.current as number);
    };
  }, []);

  useEffect(() => {
    if (!isKaspiActive && !isHalykActive && !isCashActive) {
      startPageTimer();
    } else {
      resetPageTimer();
    }
  }, [isKaspiActive, isHalykActive, isCashActive]);

  function startPageTimer() {
    clearTimeout(pageTimerRef.current as number);
    pageTimerRef.current = setTimeout(() => {
      navigate('/');
    }, 10000) as unknown as number;
  }

  function resetPageTimer() {
    clearTimeout(pageTimerRef.current as number);
  }

  function startPopUpTimer() {
    clearTimeout(popUpTimerRef.current as number);
    popUpTimerRef.current = setTimeout(() => {
      navigate('/');
    }, 10000) as unknown as number;
  }

  function resetPopUpTimer() {
    clearTimeout(popUpTimerRef.current as number);
  }

  function handleKaspiClick() {
    setIsKaspiActive(true);
    resetPageTimer();
    startPopUpTimer();
  }

  function handleHalykClick() {
    setIsHalykActive(true);
    resetPageTimer();
    startPopUpTimer();
  }

  function handleCashClick() {
    setIsCashActive(true);
    resetPageTimer();
    startPopUpTimer();
  }

  function handleKaspiClose() {
    setIsKaspiActive(false);
    resetPopUpTimer();
    startPageTimer();
  }

  function handleHalykClose() {
    setIsHalykActive(false);
    resetPopUpTimer();
    startPageTimer();
  }

  function handleCashClose() {
    setIsCashActive(false);
    resetPopUpTimer();
    startPageTimer();
  }

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
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={KaspiImage} alt="Kaspi Payment Method" />
          <button className="close-button" onClick={handleKaspiClose}>
            Закрыть
          </button>
        </div>
      </div>
      <div className={`overlay ${isCashActive ? 'active' : ''}`}>
        <div className="info-container">
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img alt="Cash Payment Method" />
          <button className="close-button" onClick={handleCashClose}>
            Закрыть
          </button>
        </div>
      </div>
      <div className={`overlay ${isHalykActive ? 'active' : ''}`}>
        <div className="info-container">
          <h3>ОБФ «БОТАШЫМ»</h3>
          <img src={HalykImage} alt="Halyk Bank Payment Method" />
          <button className="close-button" onClick={handleHalykClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodPage;
