import React from 'react';
import '../styles/buttonStyling.css';
const Button = (props) => {
  return (
    <button
      class='button is-rounded mr-5 mb-3'
      style={{ backgroundColor: 'transparent', color: 'white' }}>
      {props.buttonText}
    </button>
  );
};

export default Button;
