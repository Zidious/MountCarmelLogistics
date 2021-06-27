import React from 'react';
import ServicesLayout from './servicesLayout';
import Section from '../components/section';
const Services = () => {
  return (
    <React.Fragment>
      <h1 class='title has-text-centered mt-5 pt-5'>Services</h1>
      <Section content={<ServicesLayout />} />
    </React.Fragment>
  );
};

export default Services;
