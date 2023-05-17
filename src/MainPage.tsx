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
            Благотворительный фонд "ОБФ Боташым" - Ваша помощь в добрых руках!
            Мы, Благотворительный фонд "ОБФ Боташым", 
            являемся некоммерческой организацией, 
            посвященной поддержке и помощи нуждающимся людям.
            Наша миссия - создать лучшие условия для развития 
            общества и обеспечить возможности для достойной жизни для всех.
          </p>
          <button className="close-button" onClick={handleCloseClick}>
            Закрыть
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
