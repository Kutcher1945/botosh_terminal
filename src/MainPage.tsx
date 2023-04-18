import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png'

function MainPage() {
  const navigate = useNavigate();
  const [isInfoActive, setIsInfoActive] = useState(false);

  function handleMakePaymentClick() {
    navigate('/payment-method');
  }

  function handleInfoClick() {
    setIsInfoActive(true);
  }

  function handleCloseClick() {
    setIsInfoActive(false);
  }

  return (
    <div className="MainPage">
      <div className="button-container">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
        />
        <button className="button" onClick={handleMakePaymentClick}>
          ПОЖЕРТВОВАТЬ
        </button>
        <button className="button" onClick={handleInfoClick}>
          ИНФОРМАЦИЯ
        </button>
      </div>

      <div className={`overlay ${isInfoActive ? 'active' : ''}`}>
        <div className="info-container">
          <h2>Информация о проекте ОБФ «БОТАШЫМ»</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper vestibulum mauris, sit amet rhoncus arcu. Quisque eget
            quam sed risus ullamcorper bibendum.
          </p>
          <button className="close-button" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      </div>

      <footer className='footer'>
        <p>© 2023 Благотворительный фонд ОБФ Боташым. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default MainPage;
