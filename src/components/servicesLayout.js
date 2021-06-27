import React from 'react';
import Card from '../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBoxes, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

const ServicesLayout = () => {
  return (
    <React.Fragment>
      <div class='columns mb-5 has-text-centered is-justify-content-center mb-5'>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faTruck} size='5x' id='iconColour' />

          <Card />
        </div>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faBoxes} size='5x' id='iconColour' />

          <Card />
        </div>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faTruckLoading} size='5x' id='iconColour' />

          <Card />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesLayout;
