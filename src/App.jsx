import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark';

import './App.sass';
import CodeModal from './components/modals/codeModal';
import FormModal from './components/modals/formModal';
import FinishModal from './components/modals/finishModal';
import LeftHalfBG from './components/leftHalfBG';
import MobileHeader from './components/mobileHeader';

function App() {
  //const [emailField, setEmailField] = useState(<></>);
  const [checkmark, setCheckmark] = useState(<></>);
  const [error, setError] = useState('');
  const [festivities, setFestivities] = useState([]);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      // We execute the same script as before
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  useEffect(() => {
    if (error !== '') {
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }, [error]);

  const showFormModal = () => {
    document.getElementById('left_half').classList.add('fullWidth');
    document.getElementById('code-modal').classList.add('disappear');
    setTimeout(() => {
      document.getElementById('form-modal').classList.add('appear');
    }, 750);
  };

  const showFinishModal = () => {
    setTimeout(() => {
      document.getElementById('form-modal').classList.remove('appear');
      setTimeout(() => {
        document.getElementById('form-modal').style.display = 'none';
      }, 500); // Setting display to none because overflow issue on iphone 5
      document.getElementById('finish-modal').classList.add('appear');
      //document.getElementById('left_half').classList.remove('fullWidth');
      setCheckmark(<Checkmark size="60px" color="#223344" />);
    }, 1500); // Most connections are so fast the loading spinner wont even trigger, so i add a delay to let the user know something's happening/happened already
  };

  return (
    <div className="App">
      <CodeModal nextModal={showFormModal} setFestivities={setFestivities} setError={setError} />

      <FormModal showFinishModal={showFinishModal} festivities={festivities} setError={setError} />

      <FinishModal checkmark={checkmark} />

      <MobileHeader />

      <LeftHalfBG />

      <div className="background" />
      {error !== '' ? (
        <div className="errorCard">
          <p>
            <h3>ERROR:</h3>
            {error}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
