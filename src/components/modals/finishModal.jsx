import React from 'react';
import PropTypes from 'prop-types';

import '../../App.sass';

function FinishModal(props) {
  return (
    <div id="finish-modal" className="finish-modal">
      <div>
        {props.checkmark}
        <p>Bedankt voor het antwoorden op je uitnodiging!</p>
        <p>Dat vuile coronabeest veranderd ons feest.</p>
        <p>
          We doen het in 3 keer <br />
          en hopen op mooi weer!
        </p>
        <p>
          Zet u altijd aan een tafel van 4 <br />
          en heb daar dan altijd veel plezier!
        </p>
        <p>
          Gebruik gewoon u gezond verstand,
          <br />
          dan wordt het nog zo plezant!
        </p>
        <p>
          Maar probeer er vooral samen met ons van te genieten!
          <br />
          Ookal zou het die dag geweldig kunnen gieten.
        </p>
        <p>
          Hebt ge nog vragen of weet ge iets nie, contacteer ons dan op <a href="tel:0476706403">0476 70 64 03</a>
        </p>
      </div>
    </div>
  );
}

FinishModal.propTypes = {
  checkmark: PropTypes.element,
};

//FinishModal.defaultProps = {
//};

export default FinishModal;
