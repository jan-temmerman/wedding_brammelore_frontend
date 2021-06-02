import React, { useState } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5/index.js';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

import '../../App.sass';
import PulseLoader from 'react-spinners/PulseLoader';

function CodeModal(props) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const checkCode = () => {
    const inputContainer = document.getElementById('input-container');

    setIsLoading(true);
    fetch('https://wedding-brammelore.herokuapp.com/api/codes/check', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ code: code }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        console.log(res);

        if (res.data.accepted) {
          props.setFestivities(res.data.festivities);
          props.nextModal();
          inputContainer.classList.remove('wrong');
          document.getElementsByTagName('body')[0].style['overflow-y'] = 'auto';
          document.getElementsByClassName('mobile-header')[0].style.position = 'absolute';
        } else {
          inputContainer.classList.add('wrong');
          inputContainer.classList.add('wrong-animation');
          setTimeout(() => {
            inputContainer.classList.remove('wrong-animation');
          }, 820);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        props.setError(err.message);
      });
  };

  const handleCodeEnter = (e) => {
    if (e.keyCode === 13) {
      checkCode();
    }
  };

  return (
    <div id="code-modal" className="code-modal">
      <div className="code-container">
        <p>Code</p>
        <div className="input-container" id="input-container">
          <div style={{ width: '30px', height: '30px', backgroundColor: 'transparent' }} />
          <input
            type="text"
            name="code"
            id="input_code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => handleCodeEnter(e)}
            autoComplete="off"
          />
          {isLoading ? (
            <div
              style={{
                backgroundColor: 'transparent',
                padding: '3.5px',
                margin: 0,
                width: '60px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PulseLoader color={'#000000'} loading={true} size={6} />
            </div>
          ) : (
            <button onClick={() => checkCode()}>
              <IconContext.Provider
                value={{
                  style: { padding: 0, margin: 0, width: '30px', height: '30px', backgroundColor: 'transparent' },
                }}
              >
                <IoChevronForwardOutline />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

CodeModal.propTypes = {
  nextModal: PropTypes.func,
  setFestivities: PropTypes.func,
  setError: PropTypes.func,
};

//CodeModal.defaultProps = {
//};

export default CodeModal;
