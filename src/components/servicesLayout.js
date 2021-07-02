import React from 'react';
import Card from '../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBoxes, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

const ServicesLayout = () => {
  const serviceOne =
    'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi' +
    'porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,' +
    'nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.';

  const serviceTwo = '';

  const serviceThree = '';

  return (
    <React.Fragment>
      <div class='columns mb-5 has-text-centered is-justify-content-center mb-5'>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faTruck} size='5x' id='iconColour' />

          <Card content={serviceOne} />
        </div>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faBoxes} size='5x' id='iconColour' />

          <Card content={serviceOne} />
        </div>
        <div class='column is-one-quarter'>
          <FontAwesomeIcon className='mb-5' icon={faTruckLoading} size='5x' id='iconColour' />

          <Card content={serviceOne} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesLayout;
