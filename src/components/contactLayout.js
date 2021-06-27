import React from 'react';
import Form from './form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/buttonStyling.css';

const ContactLayout = () => {
  return (
    <React.Fragment>
      <div class='columns mb-5 has-text-centered is-justify-content-center mb-5'>
        <div class='column is-one-quarter  is-align-self-center'>
          <div class='column'>
            <FontAwesomeIcon id='iconColour' icon={faEnvelope} size='2x' />

            <p className='is-inline ml-3'>mail@nomail.com</p>
          </div>
          <div class='column mt-5'>
            <FontAwesomeIcon id='iconColour' icon={faPhoneAlt} size='2x' />
            <p className='is-inline ml-3'>000 000 00 000</p>
          </div>
        </div>
        <div class='column is-one-quarter'>
          <Form />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactLayout;
