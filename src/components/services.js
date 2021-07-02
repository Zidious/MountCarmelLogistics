import React from 'react';
import ServicesLayout from './servicesLayout';
import Section from '../components/section';
import { Element } from 'react-scroll';

const Services = () => {
  return (
    <React.Fragment>
      <Element name='servicesSection'>
        <h1 class='title has-text-centered mt-5 pt-5'>Services</h1>
        {/* Where I want the button to go to this element */}

        <Section content={<ServicesLayout />} />
      </Element>
    </React.Fragment>
  );
};

export default Services;
